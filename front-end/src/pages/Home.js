import React from 'react'
import { useTranslation } from 'react-i18next'
import PostList from './PostList'
import Contact from './Contact'

function Home () {
  const { t } = useTranslation()
  return (
    <>
      <div class='alert alert-success' role='alert'>
        <h1 class='display-6'>{t('parag.description')}</h1>
        <PostList />
        <br />
        <Contact />
        <br />
      </div>
    </>
  )
}

export default Home
