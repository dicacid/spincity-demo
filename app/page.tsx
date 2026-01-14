import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'

type Stream = {
  id: string
  name: string
  viewers: number
  tipsTotal: number
}

const mockStreams: Stream[] = [
  { id: '1', name: 'DJ Neon', viewers: 150, tipsTotal: 2500 },
  { id: '2', name: 'DJ Pulse', viewers: 200, tipsTotal: 3200 },
  { id: '3', name: 'DJ Vibe', viewers: 80, tipsTotal: 1200 },
]

async function getStreams(): Promise<Stream[]> {
  try {
    const { data } = await supabase
      .from('streams')
      .select('id, name, viewers, tips_total')
      .order('viewers', { ascending: false })

    if (!data) {
      return mockStreams
    }

    return data.map((s: any): Stream => ({
      id: s.id,
      name: s.name,
      viewers: s.viewers,
      tipsTotal: s.tips_total ?? 0
    }))
  } catch {
    return mockStreams
  }
}

export default async function LobbyPage() {
  const streams = await getStreams()

  return (
    <div>
      <h1 className="text-4xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-12 text-center drop-shadow-2xl animate-pulse">🎧 Live Streams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {streams.map((stream) => (
          <Link
            key={stream.id}
            href={`/stream/${stream.id}`}
            className="group block p-8 rounded-3xl bg-gradient-to-br from-black/30 via-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
          >
            <div className="relative h-48 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-blue-500/20 animate-pulse" />
              <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full animate-ping shadow-lg" />
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform">{stream.name}</h2>
            <div className="space-y-3 text-lg">
              <div className="flex items-center text-green-400 font-mono font-bold">
                👁️ <span className="ml-2 text-3xl">{stream.viewers.toLocaleString()}</span> viewers
              </div>
              <div className="flex items-center text-yellow-400 font-mono font-bold">
                💰 <span className="ml-2 text-3xl">${stream.tipsTotal.toLocaleString()}</span> tipped
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
