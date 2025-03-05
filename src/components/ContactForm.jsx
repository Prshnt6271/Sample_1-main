import React, { useState } from "react";
import Select from "react-select";

// Country options with flags
const countryOptions = [
  { value: "US", label: "🇺🇸 United States" },
  { value: "IN", label: "🇮🇳 India" },
  { value: "AE", label: "🇦🇪 United Arab Emirates" },
  { value: "UK", label: "🇬🇧 United Kingdom" },
  { value: "CA", label: "🇨🇦 Canada" },
  { value: "AU", label: "🇦🇺 Australia" },
  { value: "FR", label: "🇫🇷 France" },
  { value: "DE", label: "🇩🇪 Germany" },
  { value: "JP", label: "🇯🇵 Japan" },
  { value: "CN", label: "🇨🇳 China" },
  { value: "BR", label: "🇧🇷 Brazil" },
  { value: "ZA", label: "🇿🇦 South Africa" },
];

const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      {/* Horizontal Line */}
      <div className="w-full max-w-lg mx-auto mt-8 border-t-[1.5px] border-black"></div>

      {/* Styled Text Below the Line */}
      <p className="text-center text-2xl font-semibold text-gray-800 mt-4 uppercase tracking-wide">
        Available To Assist You 24/7
      </p>

      {/* Contact Form */}
      <div className="mt-8 px-6 w-full max-w-3xl mx-auto">
        <form className="space-y-5">
          {/* First Row: First Name, Last Name, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:border-gray-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:border-gray-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Mobile Number & Country/Region (Side by Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:border-gray-600"
            />

            {/* Country Dropdown with Flags */}
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              placeholder="Select Country/Region"
              className="w-full border border-gray-400 rounded-md focus:outline-none"
            />
          </div>

          {/* Message Box */}
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:border-gray-600"
          ></textarea>

          {/* reCAPTCHA Placeholder */}
          <div className="flex justify-center">
            <div className="border border-gray-400 p-4 rounded-md text-center w-full bg-gray-100">
              <p className="text-gray-600">[reCAPTCHA will be placed here]</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-sky-500 text-white py-3 px-6 rounded-md hover:bg-sky-600 transition w-full font-semibold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
