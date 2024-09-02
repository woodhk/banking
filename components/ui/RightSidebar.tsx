import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner"/>
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">{user.name[0]}</span>
          </div>
          
          <div className="profile-details">
            <h1 className="profile-name">
              {user.name}
            </h1>
            <p className="profile-email">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image 
            src="/icons/plus.svg"
            width={20}
            height={20}
            alt="plus"
            />
            <h2 className="text-14 font-semibold text-gray-600">
              Add Bank
            </h2>
          </Link>
        </div>
        {banks?.length > 0 && ( //If there are banks, then render a div
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard 
                key={banks[0].id} //Add a key prop to the BankCard component
                account={banks[0]} //Pass the first bank to the BankCard component
                userName={user.name} //Pass the user's full name to the BankCard component
                showBalance={false} //Hide the balance in the BankCard component
              />
            </div>
            {banks[1] && ( //If there are more than 1 bank, then render another div
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard 
                key={banks[1].id} 
                account={banks[1]} //Pass the second bank to the BankCard component
                userName={user.name} 
                showBalance={false} 
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar