import Sidebar from "../components/Sidebar"
import Head from "next/head"
const styles={
    container:" h-full w-full flex bg-[#fff] m-2"
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        
      </Head>
     <Sidebar/>
     {/* hello */}
    </div>
  )
}
