export default function StudentZone() {
  const user = JSON.parse(
    localStorage.getItem('student-user')
  )

  const sections = [
    {
      title: 'Drafting Canvas',
      desc: 'Create, organize, and manage your academic drafts and writing projects.',
      icon: '✍️',
    },
    {
      title: 'Translate into English',
      desc: 'Convert regional language content into professional English instantly.',
      icon: '🌐',
    },
    {
      title: 'Assessment Hub',
      desc: 'Track quizzes, assignments, tests, and evaluation reports.',
      icon: '📊',
    },
    {
      title: 'Log into Your Coursework',
      desc: 'Access your enrolled subjects, resources, and course materials.',
      icon: '📚',
    },
    {
      title: 'Archive',
      desc: 'Store previous drafts, submissions, reports, and project history securely.',
      icon: '🗂️',
    },
    {
      title: 'Your Achievements',
      desc: 'View badges, rankings, certificates, and academic milestones.',
      icon: '🏆',
    },
    {
      title: 'Featured Submissions',
      desc: 'Explore highlighted student submissions and top-rated academic work.',
      icon: '⭐',
    },
  ]

  return (
    <div className='min-h-screen bg-black text-white px-6 py-20'>
      <div className='max-w-7xl mx-auto'>

        {/* Header */}
        <div className='mb-16'>
          <div className='inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm mb-6'>
            Student Workspace
          </div>

          <h1 className='text-5xl md:text-6xl font-extrabold mb-6 leading-tight'>
            Welcome to <span className='text-green-400'>Student Zone</span>
          </h1>

          <p className='text-zinc-400 text-lg max-w-3xl leading-8'>
            Manage coursework, drafting, assessments, academic submissions,
            and achievements from one modern productivity dashboard.
          </p>

          <div className='mt-8 flex items-center gap-4'>
            <div className='w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-2xl'>
              👨‍🎓
            </div>

            <div>
              <h3 className='text-xl font-semibold'>
                {user?.email}
              </h3>

              <p className='text-zinc-500'>
                Logged into PlotOri Workspace
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {sections.map((section, index) => (
            <div
              key={index}
              className='group bg-zinc-900/80 border border-zinc-800 hover:border-green-500/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-xl'
            >
              <div className='w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300'>
                {section.icon}
              </div>

              <h2 className='text-2xl font-bold mb-4 group-hover:text-green-400 transition-all'>
                {section.title}
              </h2>

              <p className='text-zinc-400 leading-7'>
                {section.desc}
              </p>

              <button className='mt-8 bg-zinc-800 hover:bg-green-600 text-white px-5 py-3 rounded-xl transition-all duration-300 font-medium'>
                Open Module
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}