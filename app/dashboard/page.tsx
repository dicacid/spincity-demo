import { supabase } from '@/lib/supabaseClient'

type Tip = {
  stream_name: string;
  amount: number;
  tipped_at: string;
}

const mockEarnings = 4370.50
const mockRecentTips: Tip[] = [
  { stream_name: 'DJ Neon', amount: 50, tipped_at: '2 min ago' },
  { stream_name: 'DJ Pulse', amount: 10, tipped_at: '5 min ago' },
  { stream_name: 'DJ Vibe', amount: 25, tipped_at: '12 min ago' },
  { stream_name: 'DJ Neon', amount: 100, tipped_at: '20 min ago' },
]

async function getRecentTips(): Promise<Tip[]> {
  try {
    const { data } = await supabase
      .from('tips')
      .select('stream_id, amount, tipped_at')
      .order('tipped_at', { ascending: false })
      .limit(5)

    if (data) {
      // Mock mapping
      return data.map((tip: any) => ({
        stream_name: 'DJ Stream',
        amount: tip.amount,
        tipped_at: 'recent'
      }));
    }
  } catch {}
  return mockRecentTips
}

export default async function DashboardPage() {
  const recentTips = await getRecentTips()

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-5xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent mb-8 text-center drop-shadow-2xl animate-pulse">💰 DJ Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 p-10 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-xl rounded-3xl border border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/50 hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-4xl font-bold mb-4 text-emerald-400">Total Earnings</h2>
            <div className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              ${mockEarnings.toLocaleString()}
            </div>
            <p className="text-emerald-300 mt-4 text-xl opacity-90">All time tips received</p>
          </div>
          <div className="p-10 bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Live Streams</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl">
                <span>DJ Neon</span>
                <span className="font-bold text-green-400">● LIVE (150)</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl">
                <span>DJ Pulse</span>
                <span className="font-bold text-green-400">● LIVE (200)</span>
              </div>
            </div>
          </div>
          <div className="p-10 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-xl rounded-3xl border border-blue-500/30 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Today\'s Tips</h3>
            <div className="text-4xl font-black text-yellow-400">$1,280</div>
            <p className="text-blue-300 mt-2">+45% from yesterday</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl">Recent Tips 💸</h2>
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/10 backdrop-blur-sm">
                  <th className="p-6 text-left font-bold text-lg text-white/90">Stream</th>
                  <th className="p-6 text-right font-bold text-lg text-yellow-400">Amount</th>
                  <th className="p-6 text-right font-bold text-lg text-white/90">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentTips.map((tip, idx) => (
                  <tr key={idx} className="border-t border-white/5 hover:bg-white/10 transition-all">
                    <td className="p-6 font-semibold text-purple-300">{tip.stream_name}</td>
                    <td className="p-6 text-right font-black text-2xl text-yellow-400">${tip.amount.toLocaleString()}</td>
                    <td className="p-6 text-right text-gray-300">{tip.tipped_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
