import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {DynamicFormPage, Welcome} from '@pages'
import {Article, Navigation, Section} from '@components'

function App() {
  return (
    <Router>
      <Article>
        <Navigation />
        <Section>
          <Routes>
            <Route path="/dynamic-form" element={<DynamicFormPage />} />
            <Route path="/" element={<Welcome />} />
          </Routes>
        </Section>
      </Article>
    </Router>
  )
}

export default App
