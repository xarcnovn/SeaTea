import type { ChangeEvent } from 'react'
import ky from 'ky'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Row } from '@/components/Row'
import { Button } from '@/components/Button/Button'
import { useState } from 'react'

export default function GetInspired() {
  const [image, setImage] = useState<File | null>(null)
  const [bafalizedImage, setBafalizedImage] = useState<File | null>(null)
  const [requestStatus, setRequestStatus] = useState<
    'idle' | 'pending' | 'resolved' | 'rejected'
  >('idle')
  const imageUrl = image ? URL.createObjectURL(image) : undefined
  const bafalizedImageUrl = bafalizedImage
    ? URL.createObjectURL(bafalizedImage)
    : undefined

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files
    if (images) {
      setImage(images[0])
    }
  }

  const clearImage = () => {
    setImage(null)
    setBafalizedImage(null)
    setRequestStatus('idle')
  }

  const bafalize = async () => {
    if (!image) return

    try {
      setRequestStatus('pending')

      const formData = new FormData()
      formData.append('file', image)
      console.log(formData.get('file'))

      await ky.post('http://localhost:5001/bafalize', {
        body: formData
      })

      setRequestStatus('resolved')
    } catch (e) {
      setRequestStatus('rejected')
    }
  }

  const download = () => {
    // TODO: implement
  }

  return (
    <DefaultLayout>
      <Row className="grid-cols-2 gap-12 max-w-7xl mx-auto p-24">
        <div>
          {image ? (
            <div className="relative group">
              <img
                src={imageUrl}
                alt="Wybrane zdjęcie"
                className="rounded-md w-full h-auto"
              />
              <button
                className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center rounded-md opacity-0 group-hover:opacity-75 transition-opacity duration-200"
                onClick={clearImage}
              >
                <span className="text-white font-semibold text-lg">
                  Usuń zdjęcie
                </span>
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center rounded-lg border-2 border-dashed border-gray-900/25 px-6 min-h-[20rem] bg-gray-100">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="text-[#BACA40]">Wybierz zdjęcie</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".jpg"
                      onChange={onFileChange}
                    />
                  </label>
                  <p className="pl-1">lub przeciągnij i upuść</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">JPG</p>
              </div>
            </div>
          )}
          <div className="flex justify-end mt-12">
            <Button
              disabled={!image || requestStatus === 'pending'}
              onClick={bafalize}
            >
              Bafalizuj
            </Button>
          </div>
        </div>
        <div>
          {requestStatus === 'idle' && (
            <div className="min-h-[20rem] border-2 border-gray-900/25 rounded-md flex items-center justify-center px-6 bg-gray-100">
              Tutaj pojawi się zbafalizowane zdjęcie
            </div>
          )}
          {requestStatus === 'resolved' && (
            <div>
              <img src={bafalizedImageUrl} />
            </div>
          )}
          {requestStatus === 'pending' && (
            <div className="min-h-[20rem] border-2 border-gray-900/25 rounded-md flex items-center justify-center px-6 bg-gray-100">
              Przetwarzanie zdjęcia...
            </div>
          )}
          <div className="flex justify-end mt-12">
            <Button disabled onClick={download}>
              Pobierz
            </Button>
          </div>
        </div>
      </Row>
    </DefaultLayout>
  )
}
