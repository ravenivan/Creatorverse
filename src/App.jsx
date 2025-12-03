import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import { Routes, Route } from 'react-router-dom'
import { supabase } from './client'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'

function App() {

  const [creators, setCreators] = useState([])

  const fetchCreators = async () => {
    const { data } = await supabase
      .from('creators')
      .select()
      .order('created_at', { ascending: true })
    setCreators(data)
  }

  useEffect(() => {
    fetchCreators()
  }, [])



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShowCreators data={creators} />} />
        <Route path="/new" element={<AddCreator refresh={fetchCreators} />} />
        <Route path="/creator/:id" element={<ViewCreator refresh={fetchCreators} />}  />
        <Route path="/edit/:id" element={<EditCreator refresh={fetchCreators}/>} />
      </Routes>

    </>
  )
}

export default App
