import './App.css'
import Header from './header'
import Details from './topic'
import research from './research'
import Body from './body'


function App() {

  return (
    <>
     <Header/>
     <main>
      <Details/>
      <div >
        {research.map((assignment) => {
          return <Body key={assignment.id}
                      topic={assignment.topic}
                      subTopic={assignment.subTopic}
                      body={assignment.body}    
          />
})}
      </div>
     </main>
    </>
  )
}

export default App
