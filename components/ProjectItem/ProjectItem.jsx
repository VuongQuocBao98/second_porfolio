import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectItem({}) {
  return (
    <>
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://new-store-87e2b.firebaseapp.com/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Mini Store
              </h4>
              <img src="/newstore.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Project Reactjs + Strapi api</h5>
          <p>
            - Build a demo version for a small website with product list,
            detail, cart and register/login pages.
          </p>
          <p>- Build a product filtering function similar to the Tiki page</p>
          <p>
            - Use React Hook Form and Yup for form validation in sign up and
            login.
          </p>
          <p>- ✨ Interface made with Material UI</p>
        </div>
      </div>

      {/* Bán hàng  */}
      {/* <div className="col-span-12 md:col-span-6 border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://pyramidpad.io/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Web marketplace, web launchpad, etc.
              </h4>
              <img src="/py.png" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">3 website</h5>

          <Link href="https://marketplace.pyramidwalk.com/" passHref>
            <a target="_blank">
              <h5 className="font-medium underline-offset-2 underline my-1 text-blue-500">
                Link web marketplace
              </h5>
            </a>
          </Link>
          <Link href="https://pyramidpad.io/" passHref>
            <a target="_blank">
              <h5 className="font-medium underline-offset-2 underline my-1 text-blue-500">
                Link Pyramid web
              </h5>
            </a>
          </Link>
          <Link href="https://launchpad.pyramidpad.io/" passHref>
            <a target="_blank">
              <h5 className="font-medium underline-offset-2 underline my-1 text-blue-500">
                Link Launchpad web
              </h5>
            </a>
          </Link>

          <p>- To experience the web, you need a MetaMask wallet to log in.</p>

          <p>
            - 3 websites built with Reactjs, Tailwindcss, and various other
            libraries
          </p>
          <p>
            - The databases used for the marketplace and launchpad are Moralis
            and some storage on the blockchain
          </p>
        </div>
      </div> */}
      {/* Reactjs Travel web  */}
      {/* <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://mklabs.finance/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                MKLABS
              </h4>
              <img src="/mklab.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">MKLABS</h5>
          <p>- To experience the web, you need a MetaMask wallet to log in</p>
          <p>- ✨ Interface made with scss</p>
        </div>
      </div> */}
      {/* <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://247cryp.to/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                247 Crypto
              </h4>
              <img src="/cryp.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">247CRYP</h5>

          <p>- ✨ Interface made with Scss/ and other libraries</p>
        </div>
      </div> */}

      {/* tiktok blog  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://tiktok-blue.vercel.app/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                TIKTOK BLOG
              </h4>
              <img src="/tiktok.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">TIKTOK BLOG</h5>
          <p>
            - I came up with the idea of ​​interface design with figma, and
            implemented the website
          </p>
          <p>
            - Currently not developed an admin manager for the web as well as
            the database
          </p>

          <p>- ✨ Interface made with tailwindcss</p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://bundaurengreng.vn/" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Bún Đậu RengReng
              </h4>
              <img src="/bun.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">
            Introduction website for a store bún đậu mắm tôm
          </h5>
        </div>
      </div>

      {/* Unimart unitop  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link href="https://bao.unitopcv.com" passHref>
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                mini website
              </h4>
              <img src="/unimart.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Project Laravel + MySQL</h5>
          <p>
            - Build the function of registration, login, authorization,
            automatic mailing order confirmation, admin can track order, update
            status the menu row, collect statistical data through charts, post
            new, update, Editing articles, managing users,...
          </p>

          <p>- ✨ Interface made with Bootstrap</p>
        </div>
      </div>

      {/* Theme newspaper  */}
      <div className="col-span-12 md:col-span-6  border p-2 font-sans text-xs lg:text-sm">
        <div className="text-black dark:text-white">
          <Link
            href="https://vuongquocbao98.github.io/template-newspaper/"
            passHref
          >
            <a target="_blank">
              <h4 className="text-green-500 font-bold hover:cursor-pointer my-2">
                Convert PSD file to Html/Css
              </h4>
              <img src="/vietsoz.PNG" alt="newstore" />
            </a>
          </Link>

          <h5 className="font-bold my-2">Convert PSD file to Html/Css</h5>

          <p>- ✨ Interface made with Html/Css</p>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
