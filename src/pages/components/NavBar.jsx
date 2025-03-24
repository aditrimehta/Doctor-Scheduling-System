export default function NavBar() {
    const services = [
      { name: "Find Doctor", icon: "logos/doctor.png", link: "/doctorpage" },
      { name: "Find Hospital", icon: "logos/hospital.png", link: "/hospitalpage" },
      { name: "Testimonials", icon: "logos/checkup.png",link:"/testimonials" },
      { name: "Buy Medicine", icon: "logos/medicine.png" }
    ];
  
    return (
      <nav className="bg-teal-700 text-white flex items-center justify-between px-6 py-1 pb-2 shadow-md">
        {/* Home Button */}
        <a href="/" className="text-xl font-m hover:opacity-80">
          Home
        </a>
  
        {/* Services */}
        <div className="flex space-x-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link || "#"}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img src={service.icon} alt={service.name} className="w-5 h-5" />
              <span className="text-m px-2">{service.name}</span>
            </a>
          ))}
        </div>
      </nav>
    );
  }
  