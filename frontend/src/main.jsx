import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import { store } from './store/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Homepage } from './pages'
import QuiSuisJePage from './pages/QuiSuisJePage';
import ConsultationPage from './pages/ConsultationPage';
import TherapiePage from './pages/TherapiePage';
import HonorairesPage from './pages/HonorairesPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />

  },
  {
    path: '/QuiSuisJe', // Définissez le chemin pour "Qui suis-je"
    element: <QuiSuisJePage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/difficulte', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/anxiete', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/depression', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/comportement', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/traumatismes', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/maladies', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/addictions', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/sexualite', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/travail', // Définissez le chemin pour "Qui suis-je"
    element: <ConsultationPage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/prendreRdv', // Définissez le chemin pour "Qui suis-je"
    element: <TherapiePage />, // Utilisez le composant "QuiSuisJePage"
  },
  {
    path: '/honoraires', // Définissez le chemin pour "Qui suis-je"
    element: <HonorairesPage />, // Utilisez le composant "QuiSuisJePage"
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
