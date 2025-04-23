export default function ActorsList() {
    // TODO find a placeholder image. Also link actual actor images and add those to the database.
    // Add a 
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Actors</h2>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-white">
            {/* Actor image1*/}
          </div>
          <p className="mt-2">Actor 1</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-white">
            {/* Actor image 2 */}
          </div>
          <p className="mt-2">Actor 2</p>
        </div>
      </div>
    </div>
  );
} 