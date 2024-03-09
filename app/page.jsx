import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Terms</span>
      </h1>
      <p className="desc text-center">AI Lexicon Community is a open-source AI term translating platform for modern world to discover, create and share creative translations</p>
      <Feed />
    </section>
  )
}

export default Home