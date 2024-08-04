'use client'

import React, { useState } from 'react'

export default function ImageWrapper({
  link,
  imageSx,
  label,
}: {
  link: string
  imageSx?: string
  label?: string
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  // for accessibility
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      openModal()
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="button"
        onClick={openModal}
        className="cursor-pointer"
      >
        <img
          className={imageSx}
          src={link}
          alt="此图片来自互联网，托管服务商可能删除了此图片"
          width={500}
          height={500}
        />
      </div>
      {label && <label className="text-muted-foreground">{label}</label>}

      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
          <div className="rounded bg-white p-4 shadow-lg">
            <img
              className="h-full w-full"
              src={link}
              alt="此图片来自互联网，托管服务商可能删除了此图片"
              width={500}
              height={500}
            />
            <button onClick={closeModal} className="mt-4 rounded bg-gray-200 p-2">
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
