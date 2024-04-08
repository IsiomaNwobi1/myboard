import React from 'react'
import MyBoardBlack from '/Users/mac/Desktop/myboard_fe/my-board-app-fe/src/assets/images/Black_Logo.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#175CD3] flex flex-col p-[4rem_0_0_0] w-[fit-content] box-sizing-border">
    <div className="m-[0_7rem_3rem_7rem] flex flex-row self-start w-[fit-content] box-sizing-border">
      <div className="m-[0.2rem_5.1rem_7.5rem_0] flex flex-col box-sizing-border">
        <div className="m-[0_0.2rem_2.2rem_0.2rem] flex flex-row self-start w-[fit-content] box-sizing-border">
          <Link to='/' className="m-[0_0.8rem_0_0] flex flex-row justify-center w-[2.3rem] h-[2.1rem] box-sizing-border">
            <img src={MyBoardBlack} className="w-[2.3rem] h-[2.1rem]" />
          </Link>
          <Link to='/' className="m-[0.2rem_0_0.1rem_0] inline-block break-words font-['Product_Sans','Roboto_Condensed'] font-normal text-[1.3rem] leading-[1.4] text-[var(--white-1,#FFFFFF)]">
            My Board
          </Link>
        </div>
        <p className="break-words font-['Inter'] font-[var(--text-md-normal-font-weight,400)] text-[1rem] leading-[var(--text-md-normal-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
          Design amazing digital experiences that <br/>create more happy in the world.
        </p>
      </div>
      <div className="flex flex-row box-sizing-border">
        <div className="m-[0_5.9rem_0_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_1rem_0] inline-block self-start break-words font-['Inter'] font-[var(--text-sm-semibold-font-weight,600)] text-[0.9rem] leading-[var(--text-sm-semibold-line-height,1.429)] text-[var(--gray-400,#98A2B3)]">
            Product
          </div>
          <div className="flex flex-col w-[fit-content] box-sizing-border">
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Overview
              </p>
            </Link>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Features
              </p>
            </Link>
            <div className="m-[0_0_0.8rem_0] flex flex-row w-[fit-content] box-sizing-border">
              <Link to='/' className="m-[0_0.6rem_0_0] flex flex-row justify-center box-sizing-border">
                <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                  Solutions
                </p>
              </Link>
              <div className="m-[0.1rem_0_0.1rem_0] flex flex-row justify-center box-sizing-border">
                <div className="rounded-[1rem] bg-[var(--gray-1001,#F2F4F7)] flex flex-row justify-center p-[0.1rem_0.5rem_0.1rem_0.5rem] box-sizing-border">
                  <p className="break-words font-['Inter'] font-[var(--text-xs-medium-font-weight,500)] text-[0.8rem] leading-[var(--text-xs-medium-line-height,1.5)] text-[var(--gray-700,#344054)]">
                    New
                  </p>
                </div>
              </div>
            </div>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Tutorials
              </p>
            </Link>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Pricing
              </p>
            </Link>
            <Link to='/' className="flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Releases
              </p>
            </Link>
          </div>
        </div>
        <div className="m-[0_9.1rem_0_0] flex flex-col items-center box-sizing-border">
          <div className="m-[0_0.3rem_1rem_0] inline-block break-words font-['Inter'] font-[var(--text-sm-semibold-font-weight,600)] text-[0.9rem] leading-[var(--text-sm-semibold-line-height,1.429)] text-[var(--gray-400,#98A2B3)]">
            Company
          </div>
          <div className="flex flex-col w-[fit-content] box-sizing-border">
            <Link to='/' className="m-[0_0.1rem_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                About us
              </p>
            </Link>
            <Link to='/' className="m-[0_0.6rem_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Careers
              </p>
            </Link>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Press
              </p>
            </Link>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                News
              </p>
            </Link>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Media kit
              </p>
            </Link>
            <Link to='/' className="m-[0_0.6rem_0_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Contact
              </p>
            </Link>
          </div>
        </div>
        <div className="m-[0_8.8rem_0_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_1rem_0] inline-block self-start break-words font-['Inter'] font-[var(--text-sm-semibold-font-weight,600)] text-[0.9rem] leading-[var(--text-sm-semibold-line-height,1.429)] text-[var(--gray-400,#98A2B3)]">
            Social
          </div>
          <div className="flex flex-col w-[fit-content] box-sizing-border">
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Twitter
              </p>
            </Link>
            <Link to='/' className="m-[0_0.7rem_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                LinkedIn
              </p>
            </Link>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Facebook
              </p>
            </Link>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                GitHub
              </p>
            </Link>
            <Link to='/' className="m-[0_0.2rem_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                AngelList
              </p>
            </Link>
            <Link to='/' className="m-[0_0.6rem_0_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Dribbble
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col box-sizing-border">
          <div className="m-[0_0_1rem_0] inline-block self-start break-words font-['Inter'] font-[var(--text-sm-semibold-font-weight,600)] text-[0.9rem] leading-[var(--text-sm-semibold-line-height,1.429)] text-[var(--gray-400,#98A2B3)]">
            Legal
          </div>
          <div className="flex flex-col w-[fit-content] box-sizing-border">
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center self-start box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Terms
              </p>
            </Link>
            <Link to='/' className="m-[0_0.7rem_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Privacy
              </p>
            </Link>
            <Link to='/' className="m-[0_0.4rem_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Cookies
              </p>
            </Link>
            <Link to='/' className="m-[0_0_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Licenses
              </p>
            </Link>
            <Link to='/' className="m-[0_0.3rem_0.8rem_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Settings
              </p>
            </Link>
            <Link to='/' className="m-[0_0.4rem_0_0] flex flex-row justify-center box-sizing-border">
              <p className="break-words font-['Inter'] font-[var(--text-md-medium-font-weight,500)] text-[1rem] leading-[var(--text-md-medium-line-height,1.5)] text-[var(--gray-200,#EAECF0)]">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[var(--gray-900,#101828)] flex flex-row justify-between p-[3rem_7rem_3rem_7rem] w-[90rem] box-sizing-border">
      <p className="m-[0_0.8rem_0_0] w-[58.8rem] break-words font-['Inter'] font-[var(--text-md-normal-font-weight,400)] text-[1rem] leading-[var(--text-md-normal-line-height,1.5)] text-[var(--gray-400,#98A2B3)]">
        © {currentYear} MyBoard. All rights reserved.
      </p>
    </div>
  </div>
  )
}
