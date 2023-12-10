
import { Route, Routes } from 'react-router-dom'
import './App.css'
import publicRouterComponent from './routes/routes';

function App() {
  
  return (
    <Routes>
      {publicRouterComponent.map((router,index) => {
        const path = router.path;
        const Component = router.component;
        const Layout = router.layout

        return (
          <Route key={index} path={path} element={
            <Layout>
              <Component />
            </Layout>
          }/>
        ) 
      })}
    



    </Routes>
  )
}

export default App
