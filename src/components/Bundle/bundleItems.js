import React from 'react';
import { useGlobalContext } from './context'
import SingleItem from './singleitem'

export default function BundleItems() {
  const { items, loading } = useGlobalContext()

  if (loading) {
    return <div className='loading'></div>
  }
        
  if (items.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
  <section className='section'>
      <h2 className='section-title'>Bundle Items</h2>
      <div className='cocktails-center'>
        {items.map((item) => {
          return <SingleItem key={item.id} {...item} />
        })}
      </div>
    </section>
  )
      }


