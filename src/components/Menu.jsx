import React, { useState } from 'react'

const Menu = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened} = props
    

  return (
    <>
        <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-10 right-4 md:top-5 md:right-10 px-12
        bg-[#fffff0b5] hover:bg-[#f2ab8d] font-bold text-lg
        w-20 h-10 rounded-sm flex justify-center items-center gap-2"
        >
          <div >
                <div
                  className={`bg-black h-0.5  w-4 transition-all ${
                    menuOpened ? "rotate-45  translate-y-0.5" : ""
                  }`}
                />
                <div
                  className={`bg-black h-0.5  w-4 my-1 ${
                    menuOpened ? "hidden" : ""
                  }`}
                />
                <div
                  className={`bg-black h-0.5  w-4 transition-all ${
                    menuOpened ? "-rotate-45" : ""
                  }`}
                />
          </div>
        
          Menu
      </button>
        <div className={`z-10 fixed top-0 right-0 bottom-0 
                        transition-all overflow-hidden bg-[#FFFFF0]
                        ${menuOpened ? "w-full md:w-48" : "w-0"}
                        flex flex-col gap-20 items-end`}>
          <div className="flex-1 flex items-end justify-center flex-col gap-6 p-8">
              <MenuButton  label="Home" onClick={()=> {onSectionChange(0), setMenuOpened(false)}}/>
              <MenuButton  label="About Me" onClick={()=> {onSectionChange(1), setMenuOpened(false)}}/>
              <MenuButton  label="Tech Stack" onClick={()=> {onSectionChange(2), setMenuOpened(false)}}/>
              <MenuButton  label="Projects" onClick={()=> {onSectionChange(3), setMenuOpened(false)}}/>
              <MenuButton  label="Contact" onClick={()=> {onSectionChange(4), setMenuOpened(false)}}/>
          </div>
        
      </div>
    </>
  )
}

export default Menu

const MenuButton = (props) => {
  const {label, onClick, } = props

  return (
    <button
      onClick={onClick}
      className={`text-[#000000] hover:bg-[#f2ab8d] hover:text-black 
      h-fit w-fit p-2 transition ease-in-out duration-100 delay-100
      rounded-md font-bold text-xl`}
      >
          {label}
    </button>
  )
}