import Image from 'next/image'
import React, { useState } from 'react'
import {
  SearchIcon,
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/solid'
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://links.papareact.com/fqy"
          layout="fill"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="mr-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search Box */}
      <form className="flex flex-1 items-center space-x-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button hidden type="submit" className=""></button>
      </form>
      {menuOpen ? (
        <div className="ml-5 mr-2 flex items-center">
          <XIcon
            onClick={() => setMenuOpen(!menuOpen)}
            className="icon text-gray-500 lg:hidden"
          />
          <div className="absolute top-12 right-2 items-center rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-gray-500 lg:hidden">
            <div className="flex flex-col items-center">
              <SparklesIcon className="menu-icon" />
              <GlobeIcon className="menu-icon" />
              <VideoCameraIcon className="menu-icon" />
              <hr className="w-10 border border-orange-200" />
              <ChatIcon className="menu-icon" />
              <BellIcon className="menu-icon" />
              <PlusIcon className="menu-icon" />
              <SpeakerphoneIcon className="menu-icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-5 flex items-center">
          <MenuIcon
            onClick={() => setMenuOpen(!menuOpen)}
            className="icon text-gray-500 lg:hidden"
          />
        </div>
      )}

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-orange-200" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            src="https://links.papareact.com/23l"
            height={5}
            width={5}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  )
}

export default Header
