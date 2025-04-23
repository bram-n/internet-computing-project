export default function CriticReviews() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Critics' Takes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-4 rounded-lg">
          <p>Positive Review 1</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <p>Negative Review 1</p>
        </div>
      </div>
    </div>
  );
} 