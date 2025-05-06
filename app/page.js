import Image from 'next/image'

export default function Home () {
  const session = useSession()
  console.log('session', session)

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
    </>
  )
}
