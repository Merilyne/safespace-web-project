export default function ProfessionalInfo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Where do you currently spend most of your time?
        </h1>
        <form className="space-y-4">
          {[
            "Other online platforms",
            "Clinic or hospital",
            "Private practice",
            "Community mental health agency",
            "Teaching or counseling in an academic setting",
            "Other clinical setting",
            "Not currently practicing",
          ].map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                name="practice"
                id={option}
                value={option}
                className="mr-2"
              />
              <label htmlFor={option} className="cursor-pointer">{option}</label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
