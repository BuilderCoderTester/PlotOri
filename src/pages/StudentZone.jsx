export default function StudentZone() {
  const user = JSON.parse(
    localStorage.getItem('student-user')
  )

  return (
    <div className='min-h-screen px-6 py-20'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-5xl font-bold mb-4'>
          Welcome to Student Zone
        </h1>

        <p className='text-xl text-gray-500 mb-10'>
          Logged in as: {user?.email}
        </p>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-3xl shadow-xl'>
            <h2 className='text-2xl font-bold mb-3'>
              Notes
            </h2>

            <p className='text-gray-500'>
              Access study materials and notes.
            </p>
          </div>

          <div className='bg-white p-8 rounded-3xl shadow-xl'>
            <h2 className='text-2xl font-bold mb-3'>
              Assignments
            </h2>

            <p className='text-gray-500'>
              View assignments and submissions.
            </p>
          </div>

          <div className='bg-white p-8 rounded-3xl shadow-xl'>
            <h2 className='text-2xl font-bold mb-3'>
              Coding Practice
            </h2>

            <p className='text-gray-500'>
              Practice DSA and development problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}