export default function MapSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* ADDRESS INFO */}
        <div>
          <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Our Location
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Powells India Corporation
          </h2>

          <p className="mt-4 text-gray-600 max-w-md">
            Visit our corporate office or manufacturing unit to discuss
            electrical meters, ATS panels, AMF controllers, and industrial
            power solutions.
          </p>

          <div className="mt-6 space-y-2 text-gray-700">
            <p><strong>Address:</strong></p>
            <p>
              #123, Industrial Area,<br />
              Peenya, Bengaluru – 560058<br />
              Karnataka, India
            </p>

            <p className="mt-4">
              <strong>Working Hours:</strong><br />
              Mon – Sat : 9:30 AM – 6:30 PM
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/njk1ZiphHWiytkhU9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
          >
            Get Directions →
          </a>
        </div>

        {/* GOOGLE MAP */}
        <div className="rounded-2xl overflow-hidden shadow-lg border">
          <iframe
            title="Powells India Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.122006775559!2d77.52572661482294!3d13.028776390817053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7df1f3a123%3A0xabcdef123456789!2sPeenya%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
