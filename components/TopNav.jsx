import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    display: flex;
`

const BackBtnIcon = styled.img`
    width: 2em;
    height: 2em;
    cursor: pointer;
`

function TopNav(props) {
    return (
        <>
            <Nav>
                <div>
                    <Link href="/">
                        <BackBtnIcon src='/static/round-arrow-back.png' alt='back arrow icon' />
                    </Link>
                </div>
            </Nav>
        </>
    )
}

export default TopNav