import MainLayout from "../components/layouts/MainLayout";

import Teams from "../components/Team/Teams";

const About = () => {
  return (
    <div class="">
      <MainLayout>
        <div class="min-h-screen flex flex-col">
          <main class="flex-grow  py-10 text-black">
            <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white">
              <h2 class="text-4xl font-bold mb-6 ">
                <span class="border-4 border-cyan-500 p-2">About Zattech</span>
              </h2>
              <p class="text-lg mb-12 bg-transparent text-black  ">
                Mobile Development "At Zattech, we craft intuitive and engaging
                mobile experiences that seamlessly integrate into your users'
                lives. Our expert team leverages cutting-edge technologies to
                deliver high-performance apps across iOS and Android platforms."
                Hardware Development "Zattech's hardware development
                capabilities extend beyond the ordinary. We specialize in
                designing and manufacturing innovative physical products that
                meet the highest standards of quality, functionality, and
                durability." Software Development "Zattech is your partner in
                software innovation. Our experienced developers create robust,
                scalable, and secure solutions tailored to your specific needs.
                From custom applications to enterprise software, we deliver
                excellence at every stage of the development lifecycle."
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div class="bg-white shadow-lg rounded-lg p-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1643409329501-f17776d3823a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    class="h-64 w-96 duration-1000 hover:scale-110"
                  />
                  <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
                  <p class="text-lg text-gray-700">
                    To{" "}
                    <span class="font-bold text-blue-500">
                      empower businesses
                    </span>{" "}
                    with{" "}
                    <span class="font-bold text-blue-500">
                      cutting-edge technology solutions
                    </span>{" "}
                    that drive{" "}
                    <span class="font-bold text-blue-500">growth</span> and{" "}
                    <span class="font-bold text-blue-500">success</span>.
                  </p>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    class="h-64 w-96 duration-1000 hover:scale-110"
                  />
                  <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
                  <p class="text-lg text-gray-700">
                    To be a
                    <span class="font-bold text-blue-500">global leader</span>{" "}
                    in technology services, known for our commitment to{" "}
                    <span class="font-bold text-blue-500">quality</span> and{" "}
                    <span class="font-bold text-blue-500">innovation</span>.
                  </p>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    class="h-64 w-96 duration-1000 hover:scale-110"
                  />
                  <h3 class="text-2xl font-bold mb-4">Our Values</h3>
                  <p class="text-lg text-gray-700">
                    <span class="font-bold text-blue-500">Integrity</span>,{" "}
                    <span class="font-bold text-blue-500">Innovation</span>, and{" "}
                    <span class="font-bold text-blue-500">Excellence</span> are
                    the core principles guiding our work. We prioritize{" "}
                    <span class="font-bold text-blue-500">Customer Focus</span>{" "}
                    and foster{" "}
                    <span class="font-bold text-blue-500">Collaboration</span>{" "}
                    to deliver exceptional solutions.
                  </p>
                </div>
              </div>
              <div class=" bg-white mt-12">
                <Teams />
              </div>
            </div>
          </main>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
