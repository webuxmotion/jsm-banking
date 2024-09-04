"use client"

import React, { Fragment } from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const pathname = usePathname();

    return (
        <Fragment>
            <Link
                href=""
                className='flex mb-12 cursor-pointer items-center gap-2'
            >
                <Image
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Horizon logo"
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Moneyo</h1>
            </Link>

            {sidebarLinks.map((item, index) => {
                const isActive = pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                return (
                    <Link
                        key={index}
                        href={item.route}
                        className={cn('sidebar-link', {
                            'bg-bank-gradient': isActive
                        })}
                    >
                        <div className='relative size-6'>
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                className={
                                    cn({
                                        'brightness-[3] invert-0': isActive
                                    })
                                }
                            />
                        </div>
                        <p className={cn('sidebar-label', cn({
                            '!text-white': isActive
                        }))}>{item.label}</p>
                    </Link>
                )
            })}
        </Fragment>
    )
}

export default Navigation