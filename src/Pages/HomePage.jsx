import Footer from "../Components/Footer"
import Header from "../Components/Header"
import TypingBox from "../Components/TypingBox"

const HomePage = () => {
  return (
    <div>
        <div className="canvas">
        <div>
          <Header />
        </div>
        <TypingBox />
        <div>
          <Footer />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
