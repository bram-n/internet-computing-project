import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json({ error: 'missing userId' }, { status: 400 });
    }

    const scriptPath = path.join(process.cwd(), 'src', 'recommender.py');
    const pythonExecutable = process.env.PYTHON_EXECUTABLE || 'python';

    console.log(`executing script: ${pythonExecutable} ${scriptPath} ${userId}`);

    const scriptExecution = new Promise((resolve, reject) => {
      const pythonProcess = spawn(pythonExecutable, [scriptPath, userId]);

      let stdout = '';
      let stderr = '';

      pythonProcess.stdout.on('data', (data) => {
        stdout += data.toString();
        console.log(`python stdout: ${data}`);
      });

      pythonProcess.stderr.on('data', (data) => {
        stderr += data.toString();
        console.error(`python stderr: ${data}`);
      });

      pythonProcess.on('close', (code) => {
        console.log(`python script exited code: ${code}`);
        if (code === 0) {
          resolve({ success: true, message: 'success', output: stdout });
        } else {
          reject(new Error(`Python script exited with code ${code}. Error: ${stderr || 'Unknown error'}`));
        }
      });

      pythonProcess.on('error', (err) => {
        console.error('python did not start', err);
        reject(new Error(`python did not start: ${err.message}`));
      });
    });

    const result = await scriptExecution;
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('Error in trigger-recommender API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Failed to trigger recommender script.', details: errorMessage }, { status: 500 });
  }
} 