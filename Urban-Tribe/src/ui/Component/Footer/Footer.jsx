import {
    Footer,
    FooterDivider,
    FooterIcon,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
  import { NavLink } from "react-router-dom";
  import { Input, Button } from "reactstrap";
  
  export default function Fotter() {
    return (
      <Footer container className="p-0 ">
        <div className="w-full">
          <div className="flex flex-wrap justify-between sm:flex-nowrap md:flex-wrap py-24 mx-40">
            <div style={{ flex: "0.50" }}>
              <FooterTitle
                class="text-red-600 text-lg"
                title="Customer Service"
              />
              <FooterLinkGroup col className="p-0">
                <NavLink className="text-black hover:!text-red-600" to="/signin">
                  Sign In
                </NavLink>
                <NavLink className="text-black hover:!text-red-600" to="/cart">
                  View Cart
                </NavLink>
                <NavLink className="text-black hover:!text-red-600" to="/help">
                  Help
                </NavLink>
              </FooterLinkGroup>
            </div>
            <div className="flex-1  ">
              <FooterTitle class="text-red-600 text-lg" title="Contact Us" />
              <FooterLinkGroup col className="p-0 [&>*]:!m-0">
                <p className="max-w-80 ">
                  <span className="text-black font-bold leading-loose">
                    Address:
                  </span>
                  Urban Tribe, Backpack International Pvt LTD, B-8, Pravasi
                  Industrial Estate, Goregaon East, Mumbai- 400101
                </p>
                <p>
                  <span className="text-black font-bold"> Phone:</span> +91
                  9769487901
                </p>
                <p>
                  <span className="text-black font-bold"> Hours:</span> 5 Days a
                  week from 10:00 am to 7.00 pm
                </p>
                <p>
                  <span className="text-black font-bold"> E-mail:</span>
                  <span class="text-red-600  hover:text-black">
                    support@urbantribe.in
                  </span>
                </p>
              </FooterLinkGroup>
            </div>
            <div className="flex-1">
              <FooterTitle
                class="text-red-600 text-lg"
                title="NEWSLETTER SIGNUP"
              />
              <p>
                Subscribe to our email and be the first to know about our special
                offers! In addition, we will give you a 15% discount on the next
                order after registration.
              </p>
              <FooterLinkGroup col className="p-0 ">
                <div className="input-group">
                  <Input
                    className="form-control border-slate-200 hover:!border-red-600	"
                    placeholder="Enter Your Email"
                  />
                  <Button className="input-group-text !bg-red-600 !border-red-600 hover:!bg-black hover:!border-black">Get!</Button>
                </div>
              </FooterLinkGroup>
              <div className=" mt-4 flex space-x-6 sm:mt-0 sm:justify-start">
                <FooterIcon icon={BsFacebook} />
                <FooterIcon icon={BsInstagram} />
                <FooterIcon icon={BsTwitter} />
                <FooterIcon className="me-" icon={BsYoutube} />
              </div>
            </div>
          </div>
          <p className="text-center py-[20px] text-sm m-0 text-white bg-red-600">
            © UrbanTribe 2022. All Rights Reserved
          </p>
        </div>
      </Footer>
    );
  }