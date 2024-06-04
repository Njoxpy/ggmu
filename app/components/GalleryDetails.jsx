import React from 'react'

async function fetchGalleryData(){
    const res = await fetch('http://localhost:8001/gallery', {
      next: {
        revalidate: 60
      }
    })

    return res.json()
}

export default async function GalleryDetails() {
    const gallery = await fetchGalleryData()
  return (
    <main>
      {gallery.map((gal) => (
        <div key={gal} className='p-8 hover:shadow-lg'>
            <h3 className='font-bold text-center'>{gal.event}</h3>
            <h4 className=''>{gal.image}</h4>
            <p className='cursor-pointer'>{gal.description}</p>
        </div>
    ))}
    </main>
  )
}
