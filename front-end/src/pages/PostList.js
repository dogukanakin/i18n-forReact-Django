import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import { useTranslation } from 'react-i18next'

const apiUrls = {
  tr: {
    posts: 'http://127.0.0.1:8000/tr/api/posts',
    categories: 'http://127.0.0.1:8000/tr/api/categories'
  },
  en: {
    posts: 'http://127.0.0.1:8000/en/api/posts',
    categories: 'http://127.0.0.1:8000/en/api/categories'
  },
  fr: {
    posts: 'http://127.0.0.1:8000/fr/api/posts',
    categories: 'http://127.0.0.1:8000/fr/api/categories'
  }
}

const PostList = () => {
  const { t, i18n } = useTranslation()
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    loadData()
  }, [language])

  async function loadData () {
    try {
      const [postsResponse, categoriesResponse] = await Promise.all([
        fetch(apiUrls[language].posts),
        fetch(apiUrls[language].categories)
      ])

      if (!postsResponse.ok || !categoriesResponse.ok) {
        throw new Error('Veri çekme hatası')
      }

      const postsData = await postsResponse.json()
      const categoriesData = await categoriesResponse.json()

      setPosts(postsData)
      setCategories(categoriesData)
    } catch (error) {
      console.error('Veri çekerken hata:', error)
    }
  }

  const renderPosts = () => {
    return posts.map(post => (
      <tr key={post.id}>
        <td>{getCategoryName(post.category.id)}</td>
        <td>{post.title}</td>
        <td>{post.content}</td>
      </tr>
    ))
  }

  const getCategoryName = categoryId => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.name : 'Unknown'
  }

  return (
    <div>
      <Table dark>
        <thead>
          <tr>
            <th>{t('category')}</th>
            <th>{t('title')}</th>
            <th>{t('content')}</th>
          </tr>
        </thead>
        <tbody>{renderPosts()}</tbody>
      </Table>
    </div>
  )
}

export default PostList
