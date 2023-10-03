import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const apiUrls = {
  languageSettings: 'http://127.0.0.1:8000/tr/api/settings'
}

const Navbar = ({ history }) => {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  const toggleLanguage = newLanguage => {
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)

    // Yeni dil için uygun domaini oluşturun
    const domain = window.location.host
    const newUrl = `http://${domain}/${newLanguage}-${newLanguage}/`

    // Sayfa URL'sini güncelleyin ve sayfayı yeniden yükleyin
    window.history.pushState({}, document.title, newUrl)
    window.location.reload()

    // Yeni dil için ayarları güncelleyin
    fetch(apiUrls.languageSettings + '/', {
      method: 'PUT', // Use PUT method to update the language setting
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language: newLanguage }) // Send the selected language in the request body
    })
      .then(response => response.json())
      .then(data => {
        console.log('Updated language setting:', data)

        // Dil bilgisini çerez olarak kaydedin
        document.cookie = `language=${newLanguage}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
      })
      .catch(error => {
        console.error('Error updating language setting:', error)
      })
  }

  function getCookie (name) {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`))
    return matches ? matches[1] : undefined
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                {t('home')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                {t('contact')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/MovieList'>
                {t('movieList')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/ListPage'>
                {t('ListPage')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <select
            className='form-select d-flex'
            style={{ width: '70px' }}
            onChange={e => toggleLanguage(e.target.value)}
            value={language}
          >
            <option value='en' className='lang'>
              EN
            </option>
            <option value='tr' className='lang'>
              TR
            </option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
