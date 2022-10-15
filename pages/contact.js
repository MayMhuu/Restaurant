import Image from "next/image";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact({ contact }) {
  return (
    <div className="container mx-auto sm:px-0 w-4/5">
      <div className="w-full">
        <Image
          alt="Mountains"
          src="https://media.graphassets.com/BB4YtSNmQsKpkGeEXSnM"
          layout="responsive"
          width="100%"
          height="40px"
          className="w-10/12 h-10/12 rounded "
        />
        <h2 className="text-center text-xl font-bold text-amber-800 pt-3">
          INQUIRY
        </h2>
        <div className="flex flex-wrap justify-center w-full ">
          <div className="w-full sm:w-full md:w-full lg:w-1/3 rounded p-3 m-3 ">
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              onSubmit={(values) => {
              //  alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form className="flex flex-col font-bold text-amber-800">
                <label htmlFor="Name"> Name</label>
                <Field id="name" name="name" className="mb-3 h-10 rounded-sm focus:outline-none focus:shadow-outline" />

                <label htmlFor="Email">Email Address</label>
                <Field
                  id="email"
                  name="email"
                  className="mb-3 h-10 rounded-sm focus:outline-none focus:shadow-outline"
                />

                <label htmlFor="message">Content of inquiry</label>
                <Field
                  id="message"
                  name="message"
                  component="textarea"
                  className="mb-3 h-20 rounded-sm focus:outline-none focus:shadow-outline"
                />
                <div className="mt-8 bg-amber-800 text-center h-10 rounded-sm ">
                  <button type="submit" className=" pt-2 text-white font-black">
                    Confirmation
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/3 rounded text-md text-amber-800 p-3 m-3 ">
            <h2 className="font-bold"> Coffee House Main Store</h2>
            <p className="pt-3">
              It is located on the left side of the main hall of Kaba Aye Pagoda
              Road, at the entrance of the Junction Mawtin shopping street.
            </p>
            <p className="pt-3">
              <FontAwesomeIcon icon={faMapLocationDot} size="lg" /> Kaba Aye
              Pagoda Road, Yangon (Rangoon) Myanmar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
