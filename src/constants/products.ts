export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  model3D?: string; // Optional 3D model path
  specifications: {
    pressureRating?: string;
    temperatureRange?: string;
    material?: string;
    sizeRange?: string;
    connectionType?: string;
    standards?: string;
    finish?: string;
    inputSignal?: string;
    supplyPressure?: string;
    accuracy?: string;
    jacketPressure?: string;
    flowCapacity?: string;
    voltageRating?: string;
    controlAccuracy?: string;
    switchType?: string;
    pressureRange?: string;
    protection?: string;
  };
  applications: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface Category {
  key: string;
  title: string;
  slug: string;
  description: string;
  products: Product[];
}

// Helper function to generate slug from category title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '');
};

// Helper function to generate product ID from product name
const generateProductId = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[(),./]/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-');
};

export const categories: Category[] = [
  {
    key: 'pneumatic-actuators',
    title: 'PNEUMATIC ACTUATORS',
    slug: 'pneumatic-actuators',
    description: 'High-performance pneumatic actuators for reliable valve automation and control systems.',
    products: [
      {
        id: 'double-acting-actuators',
        name: 'Double Acting Actuators',
        description: 'High-performance pneumatic actuators that operate in both directions using compressed air.',
        detailedDescription: 'Double acting pneumatic actuators provide bi-directional operation using compressed air to drive the actuator in both opening and closing directions. These actuators offer precise control, fast response times, and are ideal for applications requiring reliable automation. They are commonly used in process industries, water treatment, and power generation facilities.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // Industrial pneumatic actuator
        specifications: {
          pressureRating: '4-8 bar',
          temperatureRange: '-20°C to +80°C',
          material: 'Aluminum, Stainless Steel',
          sizeRange: '40mm to 200mm',
          connectionType: 'ISO 5211, NAMUR'
        },
        applications: [
          'Water and wastewater treatment',
          'Oil and gas processing',
          'Chemical processing',
          'Power generation',
          'Food and beverage industry'
        ],
        faqs: [
          {
            question: 'What is the difference between double acting and single acting actuators?',
            answer: 'Double acting actuators use compressed air to operate in both directions (open and close), while single acting actuators use air to open and a spring to close. Double acting actuators provide more consistent torque in both directions and are ideal for applications requiring equal force in both operations.'
          },
          {
            question: 'What is the maximum operating pressure?',
            answer: 'Our double acting actuators are designed to operate at pressures ranging from 4 to 8 bar (58-116 PSI). The maximum pressure rating ensures optimal performance and safety in various industrial applications.'
          },
          {
            question: 'Can these actuators be used in hazardous environments?',
            answer: 'Yes, we offer explosion-proof and weatherproof versions that are suitable for hazardous environments. These actuators comply with ATEX and IECEx standards for use in potentially explosive atmospheres.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Double acting actuators require minimal maintenance. Regular inspection of air connections, periodic lubrication of moving parts, and checking for air leaks are recommended. Typical maintenance intervals are every 6-12 months depending on operating conditions.'
          },
          {
            question: 'What accessories can be added?',
            answer: 'Common accessories include limit switches for position indication, solenoid valves for remote control, positioners for precise control, and lock-up valves for safety. These can be integrated seamlessly with our actuators.'
          }
        ]
      },
      {
        id: 'single-acting-actuators',
        name: 'Single Acting Actuators',
        description: 'Spring-return pneumatic actuators that open with air pressure and close automatically with spring force.',
        detailedDescription: 'Single acting pneumatic actuators use compressed air to open the valve and a spring mechanism to close it automatically. These fail-safe actuators are perfect for applications requiring automatic closure in case of air supply failure. They offer cost-effective solutions where spring return operation is sufficient.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // Single Acting Actuator
        specifications: {
          pressureRating: '4-8 bar',
          temperatureRange: '-20°C to +80°C',
          material: 'Aluminum, Stainless Steel',
          sizeRange: '40mm to 200mm',
          connectionType: 'ISO 5211, NAMUR'
        },
        applications: [
          'Emergency shutdown systems',
          'Safety-critical applications',
          'Water distribution',
          'HVAC systems',
          'Fire protection systems'
        ],
        faqs: [
          {
            question: 'When should I choose single acting over double acting actuators?',
            answer: 'Single acting actuators are ideal for fail-safe applications where automatic valve closure is required in case of air supply failure. They are cost-effective and suitable for applications where spring return is sufficient for the closing operation.'
          },
          {
            question: 'What happens if air supply is lost?',
            answer: 'In single acting actuators, if air supply is lost, the spring automatically returns the actuator to its closed position, ensuring fail-safe operation. This makes them ideal for safety-critical applications.'
          },
          {
            question: 'What is the spring force rating?',
            answer: 'Spring force varies by actuator size and model. Our single acting actuators are designed with appropriate spring forces to ensure reliable closure even under varying pressure conditions. Specific torque ratings are available in our technical datasheets.'
          },
          {
            question: 'Can I convert a single acting to double acting?',
            answer: 'While it is technically possible in some models, it requires modification and may void warranty. We recommend selecting the appropriate actuator type during initial design. Contact our technical team for guidance.'
          },
          {
            question: 'What is the typical response time?',
            answer: 'Response time depends on actuator size and air supply pressure. Typically, single acting actuators provide faster closing times due to spring assist, ranging from 1-5 seconds depending on the application and actuator size.'
          }
        ]
      },
      {
        id: 'rack-and-pinion-ss',
        name: 'Rack And Pinion (S.S)',
        description: 'Stainless steel rack and pinion actuators offering precision, durability, and corrosion resistance.',
        detailedDescription: 'Rack and pinion actuators with stainless steel construction provide excellent corrosion resistance and durability in harsh environments. The rack and pinion mechanism ensures smooth operation and precise positioning. These actuators are ideal for applications in marine environments, chemical processing, and food industries.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/01/22/11/08/gate-valve-4781503_1280.jpg', // Rack And Pinion SS
        specifications: {
          pressureRating: '4-8 bar',
          temperatureRange: '-40°C to +120°C',
          material: 'Stainless Steel 316/304',
          sizeRange: '40mm to 200mm',
          connectionType: 'ISO 5211, NAMUR'
        },
        applications: [
          'Marine applications',
          'Chemical processing',
          'Pharmaceutical industry',
          'Food and beverage',
          'Offshore installations'
        ],
        faqs: [
          {
            question: 'Why choose stainless steel rack and pinion actuators?',
            answer: 'Stainless steel construction provides superior corrosion resistance, making these actuators ideal for harsh environments, marine applications, and industries with strict hygiene requirements. They also offer excellent durability and longevity.'
          },
          {
            question: 'What grade of stainless steel is used?',
            answer: 'We use 316L and 304 stainless steel grades, which offer excellent corrosion resistance. Grade 316L is preferred for marine and highly corrosive environments, while 304 is suitable for general industrial applications.'
          },
          {
            question: 'Are these suitable for high temperature applications?',
            answer: 'Yes, our stainless steel rack and pinion actuators can operate in temperatures ranging from -40°C to +120°C. For higher temperatures, special seals and lubricants may be required. Please consult our technical team.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Stainless steel actuators require minimal maintenance due to their corrosion resistance. Regular visual inspection, checking for seal integrity, and periodic lubrication are recommended. The rack and pinion mechanism is self-lubricating in most models.'
          },
          {
            question: 'Can these be used in sanitary applications?',
            answer: 'Yes, we offer sanitary versions with polished surfaces, special seals, and food-grade lubricants that comply with FDA and 3A sanitary standards for food, pharmaceutical, and beverage industries.'
          }
        ]
      },
      {
        id: 'diaphragm-actuators',
        name: 'Diaphragm Actuators',
        description: 'Diaphragm-operated actuators providing smooth, precise control for critical applications.',
        detailedDescription: 'Diaphragm actuators use a flexible diaphragm to convert air pressure into linear motion. These actuators offer excellent sealing, smooth operation, and precise control. They are commonly used with control valves and provide reliable performance in demanding applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // Control valve actuator
        specifications: {
          pressureRating: '0.2-2.4 bar',
          temperatureRange: '-20°C to +80°C',
          material: 'Cast Iron, Aluminum, Stainless Steel',
          sizeRange: '32mm to 400mm',
          connectionType: 'Flange, Threaded'
        },
        applications: [
          'Control valve operation',
          'Process control systems',
          'Chemical processing',
          'Water treatment',
          'Steam applications'
        ],
        faqs: [
          {
            question: 'What are diaphragm actuators used for?',
            answer: 'Diaphragm actuators are primarily used for operating control valves in process control systems. They provide smooth, precise positioning and are ideal for applications requiring accurate flow control and modulation.'
          },
          {
            question: 'What is the operating pressure range?',
            answer: 'Diaphragm actuators typically operate at lower pressures (0.2-2.4 bar) compared to piston actuators. This lower pressure requirement makes them energy-efficient and suitable for precise control applications.'
          },
          {
            question: 'How does the diaphragm mechanism work?',
            answer: 'The diaphragm actuator uses a flexible diaphragm that expands or contracts based on air pressure changes. This motion is transferred to the valve stem, providing linear movement for valve operation. The diaphragm provides excellent sealing and smooth operation.'
          },
          {
            question: 'What is the lifespan of the diaphragm?',
            answer: 'Diaphragm lifespan depends on operating conditions, pressure cycles, and environmental factors. Typically, diaphragms last 5-10 years in normal service. We use high-quality elastomeric materials for extended durability.'
          },
          {
            question: 'Can positioners be mounted on diaphragm actuators?',
            answer: 'Yes, diaphragm actuators are commonly used with pneumatic or electro-pneumatic positioners for precise control. Our actuators are designed with standard mounting provisions for positioner installation.'
          }
        ]
      },
      {
        id: 'scotch-yoke-actuators',
        name: 'Scotch And Yoke Actuators',
        description: 'High-torque scotch yoke actuators ideal for large valves and high-pressure applications.',
        detailedDescription: 'Scotch yoke actuators convert linear piston motion into rotational torque through a sliding yoke mechanism. These actuators provide high torque output, making them perfect for large ball valves, plug valves, and butterfly valves requiring significant operating forces.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // High torque actuator
        specifications: {
          pressureRating: '4-10 bar',
          temperatureRange: '-40°C to +100°C',
          material: 'Cast Iron, Aluminum, Stainless Steel',
          sizeRange: '80mm to 300mm',
          connectionType: 'ISO 5211'
        },
        applications: [
          'Large ball valves',
          'Plug valves',
          'High-pressure applications',
          'Oil and gas pipelines',
          'Power generation'
        ],
        faqs: [
          {
            question: 'What is a scotch yoke mechanism?',
            answer: 'The scotch yoke mechanism converts linear motion from a piston into rotational motion. A sliding yoke connected to the piston engages with a pin on the output shaft, creating high torque output with 90-degree rotation.'
          },
          {
            question: 'Why choose scotch yoke over rack and pinion?',
            answer: 'Scotch yoke actuators provide higher torque output for the same actuator size, making them ideal for large valves and high-pressure applications. They offer excellent mechanical advantage and are more compact for high-torque applications.'
          },
          {
            question: 'What is the maximum torque output?',
            answer: 'Torque output varies by actuator size and operating pressure. Our scotch yoke actuators can provide torque ranging from 500 Nm to over 50,000 Nm, suitable for valves from 2" to 48" and larger.'
          },
          {
            question: 'Are these suitable for fast operation?',
            answer: 'Scotch yoke actuators provide moderate operating speeds. For very fast operation requirements, rack and pinion actuators may be more suitable. Typical operating times range from 5-30 seconds depending on size and pressure.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Regular lubrication of the yoke mechanism, inspection of seals and bearings, and checking for wear on the sliding surfaces are recommended. Maintenance intervals are typically 12-24 months depending on usage.'
          }
        ]
      }
    ]
  },
  {
    key: 'ball-valves',
    title: 'BALL VALVES',
    slug: 'ball-valves',
    description: 'Premium ball valves designed for reliable shut-off and flow control in various industrial applications.',
    products: [
      {
        id: 'v-notch-ball-valves',
        name: 'V- Notch Ball Valves',
        description: 'Control ball valves with V-notch design for precise flow regulation and control.',
        detailedDescription: 'V-notch ball valves feature a V-shaped notch in the ball that provides precise flow control and throttling capabilities. Unlike standard ball valves, these allow for proportional control rather than just on/off operation. They are ideal for applications requiring accurate flow modulation.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // V-Notch Ball Valve
        specifications: {
          pressureRating: 'PN16 to PN63',
          temperatureRange: '-29°C to +200°C',
          material: 'Carbon Steel, Stainless Steel 316/304',
          sizeRange: '1/2" to 12"',
          connectionType: 'Flanged, Threaded, Butt Weld'
        },
        applications: [
          'Flow control applications',
          'Throttling service',
          'Process control',
          'Slurry handling',
          'Pulp and paper industry'
        ],
        faqs: [
          {
            question: 'What is the advantage of V-notch over standard ball valves?',
            answer: 'V-notch ball valves provide precise flow control and throttling capabilities, unlike standard ball valves which are primarily for on/off service. The V-notch design allows for proportional flow control with good flow characteristics.'
          },
          {
            question: 'What is the flow characteristic?',
            answer: 'V-notch ball valves typically provide equal percentage or modified linear flow characteristics, making them suitable for control applications where precise flow modulation is required throughout the control range.'
          },
          {
            question: 'Are these suitable for slurry applications?',
            answer: 'Yes, the V-notch design helps prevent clogging and allows for better handling of slurries and viscous fluids compared to standard ball valves. The flow path helps keep particles in suspension.'
          },
          {
            question: 'What is the control range?',
            answer: 'V-notch ball valves typically provide good control from 10% to 100% of maximum flow. Below 10%, control becomes less precise. For very low flow control, consider needle valves.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, V-notch ball valves can be equipped with pneumatic or electric actuators for automated control. They are commonly used with positioners for precise flow control in process applications.'
          }
        ]
      },
      {
        id: '2-piece-ball-valves',
        name: '2 Piece Ball Valves',
        description: 'Economical 2-piece ball valves with easy maintenance and reliable performance.',
        detailedDescription: '2-piece ball valves consist of two main body pieces that are threaded or bolted together. These valves offer a balance between cost-effectiveness and functionality. The 2-piece design allows for easier maintenance compared to single-piece valves while remaining more affordable than 3-piece valves.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // 2-piece ball valve
        specifications: {
          pressureRating: 'PN16 to PN40',
          temperatureRange: '-29°C to +180°C',
          material: 'Carbon Steel, Stainless Steel, Brass',
          sizeRange: '1/4" to 4"',
          connectionType: 'Threaded (NPT, BSP), Socket Weld'
        },
        applications: [
          'General purpose applications',
          'Water systems',
          'Oil and gas',
          'Chemical processing',
          'HVAC systems'
        ],
        faqs: [
          {
            question: 'What is the difference between 2-piece and 3-piece ball valves?',
            answer: '2-piece valves have two main body sections, while 3-piece valves have a middle section that can be removed without disconnecting the valve from the pipeline. 3-piece valves offer easier inline maintenance, while 2-piece valves are more economical.'
          },
          {
            question: 'Can the valve be maintained without removing from pipeline?',
            answer: 'Limited maintenance can be performed on 2-piece valves without complete removal, but full maintenance typically requires disconnecting the valve from the pipeline, unlike 3-piece valves which allow easier inline servicing.'
          },
          {
            question: 'What materials are available?',
            answer: 'We offer 2-piece ball valves in carbon steel, stainless steel (304, 316), brass, and various alloy materials. Seat materials include PTFE, reinforced PTFE, and metal-to-metal options.'
          },
          {
            question: 'Are these suitable for frequent operation?',
            answer: 'Yes, 2-piece ball valves are designed for frequent operation. With proper maintenance and appropriate seat materials, they can handle thousands of operating cycles reliably.'
          },
          {
            question: 'What is the typical service life?',
            answer: 'Service life depends on operating conditions, but with proper maintenance and suitable material selection, 2-piece ball valves typically provide 10-15 years of reliable service in normal industrial applications.'
          }
        ]
      },
      {
        id: 'single-piece-ball-valves',
        name: 'Single Piece Ball Valves',
        description: 'Compact, economical single-piece ball valves for general purpose applications.',
        detailedDescription: 'Single-piece ball valves feature a one-piece body construction, making them the most economical option. These valves are compact, lightweight, and ideal for applications where maintenance requirements are minimal. They are commonly used in residential, commercial, and light industrial applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // Single Piece Ball Valve
        specifications: {
          pressureRating: 'PN16 to PN25',
          temperatureRange: '-20°C to +150°C',
          material: 'Brass, Stainless Steel, Carbon Steel',
          sizeRange: '1/4" to 2"',
          connectionType: 'Threaded (NPT, BSP)'
        },
        applications: [
          'Residential plumbing',
          'Commercial buildings',
          'Light industrial',
          'Irrigation systems',
          'General purpose applications'
        ],
        faqs: [
          {
            question: 'What are the advantages of single-piece design?',
            answer: 'Single-piece ball valves are the most economical option, compact, lightweight, and have fewer leak paths compared to multi-piece designs. They are ideal for applications where cost is a primary consideration.'
          },
          {
            question: 'Can these valves be repaired?',
            answer: 'Limited repair is possible on single-piece valves. Typically, only seats and seals can be replaced. If the body or ball is damaged, the entire valve usually needs to be replaced, unlike multi-piece designs.'
          },
          {
            question: 'Are these suitable for high-pressure applications?',
            answer: 'Single-piece ball valves are generally rated for lower pressures (PN16-PN25). For high-pressure applications, consider 2-piece or 3-piece designs which offer higher pressure ratings and better structural integrity.'
          },
          {
            question: 'What sizes are available?',
            answer: 'Single-piece ball valves are typically available from 1/4" to 2" sizes. Larger sizes are usually manufactured as 2-piece or 3-piece designs due to manufacturing and maintenance considerations.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, single-piece ball valves can be automated with compact actuators. However, the actuator size should be carefully selected to match the valve size and operating requirements.'
          }
        ]
      },
      {
        id: 'high-pressure-ball-valves',
        name: 'High Pressure Ball Valves',
        description: 'Heavy-duty ball valves designed for high-pressure applications in demanding industries.',
        detailedDescription: 'High-pressure ball valves are engineered to withstand extreme pressures and temperatures. These valves feature reinforced body construction, specialized sealing systems, and robust materials to ensure reliable operation in critical high-pressure applications such as oil and gas, petrochemical, and power generation.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // High pressure industrial valve
        specifications: {
          pressureRating: 'PN100 to PN420 (150-2500 PSI)',
          temperatureRange: '-46°C to +200°C',
          material: 'Carbon Steel, Stainless Steel, Alloy Steel',
          sizeRange: '1/2" to 24"',
          connectionType: 'Flanged (RF, RTJ), Threaded, Butt Weld'
        },
        applications: [
          'Oil and gas production',
          'Petrochemical industry',
          'Power generation',
          'High-pressure steam',
          'Hydraulic systems'
        ],
        faqs: [
          {
            question: 'What pressure ratings are available?',
            answer: 'Our high-pressure ball valves are available in ratings from PN100 (150 PSI) up to PN420 (2500 PSI). Special designs can accommodate even higher pressures. Please consult our technical team for specific requirements.'
          },
          {
            question: 'What materials are used for high-pressure applications?',
            answer: 'We use high-grade materials including carbon steel (ASTM A105), stainless steel (316, 316L), and various alloy steels depending on the application. Seats and seals use advanced materials like PEEK, metal-to-metal, or specialized elastomers.'
          },
          {
            question: 'Are these suitable for sour gas service?',
            answer: 'Yes, we offer special versions designed for sour gas service (H2S environments) with NACE MR0175 compliant materials and specialized sealing systems to ensure reliable operation in corrosive environments.'
          },
          {
            question: 'What testing is performed?',
            answer: 'High-pressure ball valves undergo rigorous testing including hydrostatic body test, seat seal test, and fire-safe testing per API 607/6FA standards. Each valve is individually tested before shipment.'
          },
          {
            question: 'Can these be used in fire-safe applications?',
            answer: 'Yes, we offer fire-safe certified ball valves that meet API 607 and ISO 10497 standards. These valves maintain sealing capability even after exposure to fire, critical for safety in hydrocarbon applications.'
          }
        ]
      },
      {
        id: 'trunnion-mounted-ball-valves',
        name: 'Trunnion Mounted Ball Valves',
        description: 'Heavy-duty trunnion mounted ball valves for large diameter and high-pressure applications.',
        detailedDescription: 'Trunnion mounted ball valves feature a ball that is supported by trunnions (pivots) at the top and bottom. This design reduces operating torque and provides excellent sealing at high pressures. These valves are ideal for large diameter pipelines and critical high-pressure applications in oil, gas, and petrochemical industries.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // Trunnion Mounted Ball Valve
        specifications: {
          pressureRating: 'PN100 to PN420 (150-2500 PSI)',
          temperatureRange: '-46°C to +200°C',
          material: 'Carbon Steel, Stainless Steel, Alloy Steel',
          sizeRange: '6" to 48"',
          connectionType: 'Flanged (RF, RTJ), Butt Weld'
        },
        applications: [
          'Oil and gas pipelines',
          'Petrochemical plants',
          'Large diameter applications',
          'High-pressure service',
          'Mainline isolation'
        ],
        faqs: [
          {
            question: 'What is trunnion mounting?',
            answer: 'Trunnion mounting refers to ball valves where the ball is supported by trunnions (pivot points) at the top and bottom. This provides mechanical support, reduces operating torque, and improves sealing performance under high pressure.'
          },
          {
            question: 'Why choose trunnion over floating ball?',
            answer: 'Trunnion mounted valves offer lower operating torque, better sealing at high pressures, and are suitable for larger diameters. Floating ball valves are typically used for smaller sizes and lower pressures.'
          },
          {
            question: 'What is the maximum size available?',
            answer: 'Trunnion mounted ball valves are available from 6" up to 48" and larger. These large sizes are commonly used in mainline pipelines and major process applications.'
          },
          {
            question: 'What seat designs are available?',
            answer: 'We offer various seat designs including soft seats (PTFE, reinforced PTFE), metal seats, and combination seats. Seat selection depends on pressure, temperature, and fluid characteristics.'
          },
          {
            question: 'Can these be equipped with actuators?',
            answer: 'Yes, trunnion mounted valves are commonly automated with electric, pneumatic, or hydraulic actuators. The lower operating torque makes them ideal for automation, especially in large sizes.'
          }
        ]
      },
      {
        id: 'multi-port-ball-valves',
        name: 'Multi Port (3 Way/ 4 Way / 5 Way)',
        description: 'Multi-port ball valves for flow diversion, mixing, and distribution applications.',
        detailedDescription: 'Multi-port ball valves feature multiple ports and flow paths, allowing for flow diversion, mixing, or distribution. Available in 3-way (L-port, T-port), 4-way, and 5-way configurations, these valves provide flexible flow control solutions for complex piping systems.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // Multi-port valve
        specifications: {
          pressureRating: 'PN16 to PN63',
          temperatureRange: '-29°C to +180°C',
          material: 'Stainless Steel, Carbon Steel, Brass',
          sizeRange: '1/2" to 8"',
          connectionType: 'Threaded, Flanged'
        },
        applications: [
          'Flow diversion',
          'Flow mixing',
          'Distribution systems',
          'Heat transfer applications',
          'Sampling systems'
        ],
        faqs: [
          {
            question: 'What is the difference between L-port and T-port 3-way valves?',
            answer: 'L-port (90-degree) valves divert flow between two ports, while T-port (180-degree) valves allow mixing or diverting flow between all three ports. Selection depends on the required flow pattern.'
          },
          {
            question: 'Can multi-port valves be automated?',
            answer: 'Yes, multi-port ball valves can be automated with actuators. Specialized actuators with position feedback are recommended to ensure proper port alignment and prevent flow path errors.'
          },
          {
            question: 'What flow patterns are possible?',
            answer: '3-way valves can divert flow, mix flows, or distribute flow. 4-way and 5-way valves provide even more complex flow patterns for advanced distribution and mixing applications.'
          },
          {
            question: 'Are these suitable for bidirectional flow?',
            answer: 'Yes, most multi-port ball valves are bidirectional. However, specific flow direction should be verified based on the application and valve design to ensure optimal performance.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Regular inspection of seats and seals, checking for proper port alignment, and periodic lubrication are recommended. Seals should be inspected more frequently than standard 2-way valves due to multiple sealing surfaces.'
          }
        ]
      },
      {
        id: 'metal-to-metal-ball-valves',
        name: 'Metal To Metal Ball Valves',
        description: 'High-performance metal-seated ball valves for extreme temperature and pressure applications.',
        detailedDescription: 'Metal-to-metal seated ball valves use metal sealing surfaces instead of soft seats. These valves are designed for extreme temperatures, high pressures, and abrasive or corrosive services where soft seats would fail. They offer excellent durability in demanding applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/01/22/11/08/gate-valve-4781503_1280.jpg', // Metal To Metal Ball Valve
        specifications: {
          pressureRating: 'PN100 to PN420',
          temperatureRange: '-196°C to +600°C',
          material: 'Stainless Steel, Alloy Steel, Special Alloys',
          sizeRange: '1/2" to 24"',
          connectionType: 'Flanged, Threaded, Butt Weld'
        },
        applications: [
          'High-temperature steam',
          'Cryogenic applications',
          'Abrasive media',
          'Fire-safe applications',
          'Extreme pressure service'
        ],
        faqs: [
          {
            question: 'When should metal-to-metal seats be used?',
            answer: 'Metal seats are required for extreme temperatures (above 200°C or below -50°C), high pressures, abrasive media, fire-safe applications, and services where soft seats would deteriorate quickly.'
          },
          {
            question: 'What is the sealing capability?',
            answer: 'Metal-to-metal seats typically provide Class V shutoff (bubble-tight) or better when properly lapped and maintained. Initial break-in may be required to achieve optimal sealing.'
          },
          {
            question: 'Are these suitable for cryogenic service?',
            answer: 'Yes, metal-seated ball valves are excellent for cryogenic applications (liquefied gases) as they maintain sealing properties at extremely low temperatures where elastomeric seals would fail.'
          },
          {
            question: 'What is the operating torque?',
            answer: 'Metal-seated valves typically have higher operating torque compared to soft-seated valves due to the metal-on-metal contact. Appropriate actuator sizing is important for automation.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Metal seats may require periodic lapping to maintain sealing performance. Regular inspection for wear and proper lubrication are essential. Seat replacement may be needed more frequently in abrasive services.'
          }
        ]
      },
      {
        id: '3-piece-ball-valves',
        name: '3 Piece Ball Valves',
        description: 'Versatile 3-piece ball valves offering easy maintenance and excellent performance.',
        detailedDescription: '3-piece ball valves consist of three main sections: two end caps and a center body. This design allows for easy inline maintenance without removing the valve from the pipeline. The center section can be removed for cleaning, inspection, or repair, making these valves ideal for applications requiring frequent maintenance.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg', // 3-piece ball valve
        specifications: {
          pressureRating: 'PN16 to PN63',
          temperatureRange: '-29°C to +200°C',
          material: 'Stainless Steel, Carbon Steel, Brass',
          sizeRange: '1/4" to 6"',
          connectionType: 'Threaded, Flanged, Butt Weld'
        },
        applications: [
          'Process industries',
          'Chemical processing',
          'Pharmaceutical',
          'Food and beverage',
          'Applications requiring frequent maintenance'
        ],
        faqs: [
          {
            question: 'What are the advantages of 3-piece design?',
            answer: 'The main advantage is easy inline maintenance. The center body section can be removed for cleaning, inspection, or repair without disconnecting the valve from the pipeline, saving time and reducing system downtime.'
          },
          {
            question: 'Can the valve be cleaned in place?',
            answer: 'Yes, the 3-piece design allows for easy cleaning. By removing the center section, you can access the ball and seats for thorough cleaning, making these valves ideal for sanitary and food-grade applications.'
          },
          {
            question: 'Is the initial cost higher than 2-piece?',
            answer: 'Yes, 3-piece valves typically have a higher initial cost due to the more complex design and additional manufacturing steps. However, the maintenance benefits often offset this cost over the valve lifespan.'
          },
          {
            question: 'What end connection options are available?',
            answer: '3-piece valves offer flexible end connection options. Common combinations include threaded ends, flanged ends, or one end threaded and one end flanged, providing installation flexibility.'
          },
          {
            question: 'Are these suitable for automation?',
            answer: 'Yes, 3-piece ball valves can be easily automated with actuators. The design accommodates actuator mounting, and the removable center section allows for easy maintenance even with actuators installed.'
          }
        ]
      },
      {
        id: 'wafer-type-ball-valves',
        name: 'Wafer Type Ball Valves',
        description: 'Compact wafer-type ball valves for space-constrained installations.',
        detailedDescription: 'Wafer-type ball valves are designed to fit between flanges without their own bolting, making them more compact and cost-effective. These valves are lightweight and ideal for applications where space is limited. They require proper flange installation to ensure sealing and structural support.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/04/25/03/23/butterfly-valve-2250565_1280.jpg', // Wafer Type Ball Valve
        specifications: {
          pressureRating: 'PN16 to PN40',
          temperatureRange: '-29°C to +180°C',
          material: 'Stainless Steel, Carbon Steel',
          sizeRange: '2" to 16"',
          connectionType: 'Wafer (between flanges)'
        },
        applications: [
          'Space-constrained installations',
          'Water treatment',
          'HVAC systems',
          'General industrial',
          'Cost-sensitive applications'
        ],
        faqs: [
          {
            question: 'What is the difference between wafer and flanged ball valves?',
            answer: 'Wafer valves fit between flanges without their own bolting, while flanged valves have their own flanges and bolting. Wafer valves are more compact and economical but require proper flange installation.'
          },
          {
            question: 'Is the installation different?',
            answer: 'Yes, wafer valves must be properly aligned between flanges, and gaskets are required on both sides. The flange bolts must be tightened evenly to ensure proper sealing and prevent valve damage.'
          },
          {
            question: 'Are wafer valves suitable for high pressure?',
            answer: 'Wafer valves are typically rated for lower to moderate pressures (PN16-PN40). For high-pressure applications, flanged valves are recommended for better structural integrity and sealing capability.'
          },
          {
            question: 'Can wafer valves be automated?',
            answer: 'Yes, wafer valves can be automated, but actuator selection and mounting must account for the wafer design. Some actuators may require additional support brackets for proper operation.'
          },
          {
            question: 'What are the weight savings?',
            answer: 'Wafer valves can be 30-50% lighter than equivalent flanged valves, reducing shipping costs and making installation easier, especially in overhead or hard-to-reach locations.'
          }
        ]
      }
    ]
  },
  {
    key: 'butterfly-valves',
    title: 'BUTTERFLY VALVES',
    slug: 'butterfly-valves',
    description: 'High-performance butterfly valves for efficient flow control in large diameter applications.',
    products: [
      {
        id: 'centric-butterfly-valves',
        name: 'Centric Butterfly Valves',
        description: 'Concentric butterfly valves for low-pressure applications with reliable shut-off.',
        detailedDescription: 'Concentric butterfly valves feature a centered disc design where the disc rotates around a central axis. These valves offer excellent flow characteristics, low pressure drop, and cost-effective operation. They are ideal for low to moderate pressure applications in water treatment, HVAC, and general industrial services.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/04/25/03/23/butterfly-valve-2250565_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          temperatureRange: '-20°C to +120°C',
          material: 'Cast Iron, Ductile Iron, Stainless Steel',
          sizeRange: '2" to 48"',
          connectionType: 'Wafer, Lug, Flanged'
        },
        applications: [
          'Water treatment',
          'HVAC systems',
          'Irrigation systems',
          'General industrial',
          'Low-pressure applications'
        ],
        faqs: [
          {
            question: 'What is a concentric butterfly valve?',
            answer: 'Concentric butterfly valves have a disc centered on the stem, rotating around a central axis. The disc seals against a soft seat, providing tight shut-off in low to moderate pressure applications.'
          },
          {
            question: 'What is the pressure rating?',
            answer: 'Concentric butterfly valves are typically rated for PN10 to PN16 (150-300 PSI), making them suitable for low to moderate pressure applications. For higher pressures, consider double offset or triple offset designs.'
          },
          {
            question: 'Are these suitable for throttling?',
            answer: 'Concentric butterfly valves can be used for throttling in low-pressure applications, though they provide limited control range. For precise control, double offset or triple offset designs are recommended.'
          },
          {
            question: 'What materials are available?',
            answer: 'We offer concentric butterfly valves in cast iron, ductile iron, stainless steel (304, 316), and various alloys. Seat materials include EPDM, NBR, PTFE, and other elastomers.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, concentric butterfly valves are commonly automated with pneumatic or electric actuators. They require relatively low torque, making them ideal for automation.'
          }
        ]
      },
      {
        id: 'double-offset-butterfly-valves',
        name: 'Double Offset Butterfly Valves',
        description: 'High-performance double offset butterfly valves with improved sealing and reduced wear.',
        detailedDescription: 'Double offset butterfly valves feature an offset disc that moves away from the seat before rotating, reducing seat wear and improving sealing performance. These valves provide better shut-off, longer seat life, and are suitable for higher pressure applications compared to concentric designs.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN25',
          temperatureRange: '-20°C to +150°C',
          material: 'Carbon Steel, Stainless Steel, Ductile Iron',
          sizeRange: '2" to 72"',
          connectionType: 'Wafer, Lug, Flanged'
        },
        applications: [
          'Water treatment',
          'Chemical processing',
          'Power generation',
          'Pulp and paper',
          'Moderate pressure applications'
        ],
        faqs: [
          {
            question: 'What is the advantage of double offset over concentric?',
            answer: 'Double offset design reduces seat wear by moving the disc away from the seat before rotation. This improves sealing performance, extends seat life, and allows for higher pressure ratings.'
          },
          {
            question: 'What is the maximum pressure rating?',
            answer: 'Double offset butterfly valves are typically rated for PN16 to PN25 (225-375 PSI), making them suitable for moderate pressure applications. For higher pressures, triple offset designs are recommended.'
          },
          {
            question: 'Are these suitable for high-temperature applications?',
            answer: 'Yes, double offset butterfly valves can handle higher temperatures than concentric designs, typically up to 150°C with appropriate seat materials. For extreme temperatures, consider triple offset metal-seated valves.'
          },
          {
            question: 'What is the control range for throttling?',
            answer: 'Double offset butterfly valves provide better control characteristics than concentric designs, typically offering good control from 20% to 100% of maximum flow with appropriate seat materials.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Double offset valves require minimal maintenance. Regular inspection of seat and disc, periodic lubrication of stem, and checking for proper operation are recommended. Seat replacement may be needed after extended service.'
          }
        ]
      },
      {
        id: 'high-performance-double-offset',
        name: 'High Performance (Double Offset Butterfly Valves)',
        description: 'Premium high-performance double offset butterfly valves for demanding applications.',
        detailedDescription: 'High-performance double offset butterfly valves feature enhanced design and materials for superior performance in demanding applications. These valves offer excellent sealing, high cycle life, and reliable operation in critical processes. They are engineered for applications requiring frequent operation and tight shut-off.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/04/25/03/23/butterfly-valve-2250565_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN40',
          temperatureRange: '-29°C to +180°C',
          material: 'Carbon Steel, Stainless Steel, Alloy Steel',
          sizeRange: '3" to 84"',
          connectionType: 'Wafer, Lug, Flanged, Butt Weld'
        },
        applications: [
          'Chemical processing',
          'Oil and gas',
          'Power generation',
          'Water treatment',
          'Critical process applications'
        ],
        faqs: [
          {
            question: 'What makes these high-performance?',
            answer: 'High-performance double offset valves feature enhanced disc geometry, superior materials, improved sealing technology, and rigorous quality control. They are designed for frequent operation, tight shut-off, and extended service life.'
          },
          {
            question: 'What is the pressure rating?',
            answer: 'High-performance double offset valves are rated for PN16 to PN40 (225-600 PSI), suitable for a wide range of industrial applications including higher pressure services.'
          },
          {
            question: 'Are these fire-safe?',
            answer: 'Yes, we offer fire-safe versions that meet API 607 standards. These valves maintain sealing capability even after exposure to fire, critical for safety in hydrocarbon applications.'
          },
          {
            question: 'What is the cycle life?',
            answer: 'High-performance double offset valves are designed for extended cycle life, typically rated for 100,000+ cycles with proper maintenance and appropriate operating conditions.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, these valves are commonly automated with pneumatic, electric, or hydraulic actuators. The design accommodates various actuator types and mounting configurations.'
          }
        ]
      },
      {
        id: 'damper-butterfly-valves',
        name: 'Damper Butterfly Valves',
        description: 'Specialized damper butterfly valves for air and gas flow control applications.',
        detailedDescription: 'Damper butterfly valves are designed specifically for air and gas flow control in HVAC, ventilation, and combustion systems. These valves feature lightweight construction, fast operation, and excellent flow characteristics. They are commonly used in ductwork, exhaust systems, and air handling units.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'Up to 2 bar',
          temperatureRange: '-20°C to +300°C',
          material: 'Stainless Steel, Carbon Steel, Aluminum',
          sizeRange: '6" to 120"',
          connectionType: 'Flanged, Weld-in'
        },
        applications: [
          'HVAC systems',
          'Ventilation systems',
          'Combustion air control',
          'Exhaust systems',
          'Air handling units'
        ],
        faqs: [
          {
            question: 'What is the difference between damper and standard butterfly valves?',
            answer: 'Damper butterfly valves are specifically designed for air and gas flow control, featuring lightweight construction and fast operation. Standard butterfly valves are designed for liquid service with different sealing requirements.'
          },
          {
            question: 'Are these suitable for high-temperature applications?',
            answer: 'Yes, damper butterfly valves can handle higher temperatures than standard butterfly valves, typically up to 300°C, making them suitable for exhaust and combustion applications.'
          },
          {
            question: 'What is the maximum pressure rating?',
            answer: 'Damper butterfly valves are typically rated for low pressures (up to 2 bar or 30 PSI) as they are designed for air and gas service rather than high-pressure liquid applications.'
          },
          {
            question: 'Can these be used for isolation?',
            answer: 'Damper valves provide tight shut-off in air and gas service, but they are primarily designed for flow control rather than isolation. For critical isolation, consider standard butterfly or ball valves.'
          },
          {
            question: 'What automation options are available?',
            answer: 'Damper butterfly valves are commonly automated with pneumatic or electric actuators, often with position feedback. Fast-acting actuators are available for applications requiring quick response.'
          }
        ]
      },
      {
        id: '2-piece-replaceable-muffler-butterfly-valve',
        name: '2 Piece Replaceable Muffler Butterfly Valve',
        description: 'Advanced butterfly valve with replaceable muffler design for noise reduction and easy maintenance.',
        detailedDescription: 'The 2 Piece Replaceable Muffler Butterfly Valve features a unique replaceable muffler design that effectively reduces noise levels while maintaining excellent flow characteristics. This innovative design allows for easy maintenance and replacement of the muffler component without removing the entire valve from the pipeline. The valve combines the reliable performance of butterfly valves with advanced noise reduction technology, making it ideal for applications where noise control is critical. The replaceable muffler design extends valve life and reduces maintenance costs while ensuring optimal performance in demanding industrial environments.',
        imageUrl: '/assets/product/images/2-Piece-Replaceable-Muffler-Butterfly-Valve-01-600x600.webp',
        model3D: '/assets/product/3d_model/industrial butterfly valve 3d model.glb',
        specifications: {
          pressureRating: 'PN10 to PN25',
          temperatureRange: '-10°C to +150°C',
          material: 'Ductile Iron, Carbon Steel, Stainless Steel 316/304',
          sizeRange: '2" to 24"',
          connectionType: 'Wafer, Lug, Flanged',
          standards: 'API 609, ISO 5752, BS 5155'
        },
        applications: [
          'Noise reduction applications',
          'HVAC systems',
          'Water treatment facilities',
          'Industrial process control',
          'Chemical processing',
          'Power generation',
          'Mining operations',
          'Marine applications'
        ],
        faqs: [
          {
            question: 'What is a replaceable muffler butterfly valve?',
            answer: 'A replaceable muffler butterfly valve features a removable muffler component that reduces noise generated by fluid flow. The muffler can be replaced without removing the entire valve from the pipeline, making maintenance easier and more cost-effective.'
          },
          {
            question: 'How does the muffler reduce noise?',
            answer: 'The muffler uses specially designed internal baffles or flow patterns that disrupt and reduce turbulent flow, which is the primary source of noise in butterfly valves. This design maintains flow efficiency while significantly reducing noise levels.'
          },
          {
            question: 'What are the noise reduction capabilities?',
            answer: 'The replaceable muffler design can reduce noise levels by 10-20 dB(A) depending on flow conditions and valve size. This makes these valves suitable for noise-sensitive environments and helps comply with workplace noise regulations.'
          },
          {
            question: 'How often does the muffler need replacement?',
            answer: 'Muffler replacement frequency depends on operating conditions, fluid characteristics, and flow patterns. Under normal conditions, the muffler typically lasts 5-10 years. The replaceable design allows for easy inspection and replacement during scheduled maintenance.'
          },
          {
            question: 'Can the valve operate without the muffler?',
            answer: 'Yes, the valve can operate without the muffler, but noise levels will be significantly higher. The muffler is designed for easy installation and removal, allowing flexibility in operation based on noise requirements.'
          },
          {
            question: 'What materials are used for the muffler?',
            answer: 'Mufflers are typically made from stainless steel, carbon steel, or specialized alloys depending on the application. The material selection ensures durability, corrosion resistance, and effective noise reduction.'
          },
          {
            question: 'Are these valves suitable for throttling?',
            answer: 'Yes, these valves can be used for throttling applications. The replaceable muffler design maintains good flow characteristics and control capabilities while providing noise reduction benefits throughout the operating range.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Regular maintenance includes inspection of the muffler for wear or damage, checking valve seals and disc, and periodic lubrication of the stem. The replaceable muffler design simplifies maintenance by allowing easy access to the noise reduction component.'
          }
        ]
      },
      {
        id: 'triple-offset-butterfly-valves',
        name: 'Triple Offset Butterfly Valves',
        description: 'Metal-seated triple offset butterfly valves for extreme temperature and pressure applications.',
        detailedDescription: 'Triple offset butterfly valves feature three offsets: shaft offset, cone angle offset, and seat offset. These valves use metal seats for excellent performance in extreme temperatures and pressures. They offer zero leakage, fire-safe operation, and are ideal for critical applications in oil, gas, and petrochemical industries.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/04/25/03/23/butterfly-valve-2250565_1280.jpg',
        specifications: {
          pressureRating: 'PN25 to PN150',
          temperatureRange: '-196°C to +600°C',
          material: 'Carbon Steel, Stainless Steel, Alloy Steel, Special Alloys',
          sizeRange: '2" to 96"',
          connectionType: 'Wafer, Lug, Flanged, Butt Weld'
        },
        applications: [
          'Oil and gas',
          'Petrochemical',
          'Power generation',
          'High-temperature steam',
          'Cryogenic applications'
        ],
        faqs: [
          {
            question: 'What is triple offset design?',
            answer: 'Triple offset refers to three geometric offsets: shaft offset from centerline, cone angle offset of the disc, and seat offset. This design ensures the disc contacts the seat only at the final moment of closure, eliminating wear during operation.'
          },
          {
            question: 'Why use metal seats?',
            answer: 'Metal seats provide excellent performance in extreme temperatures (up to 600°C), high pressures, fire-safe applications, and services where elastomeric seats would fail. They offer extended service life in demanding applications.'
          },
          {
            question: 'What is the sealing capability?',
            answer: 'Triple offset metal-seated valves provide zero leakage (bubble-tight) shut-off, meeting or exceeding Class VI shutoff standards when properly maintained.'
          },
          {
            question: 'Are these fire-safe?',
            answer: 'Yes, triple offset metal-seated valves are inherently fire-safe as metal seats maintain sealing capability even after exposure to fire, meeting API 607 and ISO 10497 standards.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Triple offset valves require minimal maintenance due to the non-contact design during operation. Periodic inspection of seats and disc, proper lubrication, and checking for proper operation are recommended.'
          }
        ]
      }
    ]
  },
  {
    key: 'control-valves',
    title: 'CONTROL VALVES',
    slug: 'control-valves',
    description: 'Precision control valves for accurate flow regulation in process control systems.',
    products: [
      {
        id: '3-way-diaphragm-control-valves',
        name: '3 Way Diaphragm Control Valves',
        description: 'Three-way diaphragm control valves for flow diversion and mixing applications.',
        detailedDescription: 'Three-way diaphragm control valves provide precise control of flow diversion, mixing, or distribution. These valves use a flexible diaphragm for excellent sealing and smooth operation. They are ideal for applications requiring accurate flow control with multiple flow paths.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN40',
          temperatureRange: '-20°C to +180°C',
          material: 'Carbon Steel, Stainless Steel, Bronze',
          sizeRange: '1/2" to 8"',
          connectionType: 'Threaded, Flanged'
        },
        applications: [
          'Flow mixing',
          'Flow diversion',
          'Temperature control',
          'Process control systems',
          'Chemical processing'
        ],
        faqs: [
          {
            question: 'What is a 3-way control valve?',
            answer: 'A 3-way control valve has three ports and can divert flow between two paths, mix flows from two sources, or distribute flow. The diaphragm design provides precise control and excellent sealing.'
          },
          {
            question: 'What flow patterns are available?',
            answer: '3-way control valves can be configured for diverting (one inlet, two outlets), mixing (two inlets, one outlet), or distributing (one inlet, two outlets with controlled distribution).'
          },
          {
            question: 'Are these suitable for throttling?',
            answer: 'Yes, 3-way diaphragm control valves provide excellent throttling characteristics with precise control throughout the operating range, making them ideal for process control applications.'
          },
          {
            question: 'Can positioners be mounted?',
            answer: 'Yes, these valves are designed for use with pneumatic or electro-pneumatic positioners for precise control and position feedback in closed-loop control systems.'
          },
          {
            question: 'What is the control accuracy?',
            answer: 'With appropriate positioners and control systems, 3-way diaphragm control valves can achieve control accuracy of ±1% or better, suitable for critical process applications.'
          }
        ]
      },
      {
        id: 'globe-type-control-valves',
        name: 'Globe Type',
        description: 'Globe-type control valves for precise flow control in various process applications.',
        detailedDescription: 'Globe-type control valves feature a linear motion design with a disc that moves perpendicular to the flow path. These valves offer excellent throttling characteristics, precise control, and are widely used in process control applications. They are available in various body configurations for different flow patterns.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN100',
          temperatureRange: '-29°C to +425°C',
          material: 'Carbon Steel, Stainless Steel, Alloy Steel',
          sizeRange: '1/2" to 16"',
          connectionType: 'Threaded, Flanged, Butt Weld'
        },
        applications: [
          'Process control',
          'Steam control',
          'Water treatment',
          'Chemical processing',
          'Power generation'
        ],
        faqs: [
          {
            question: 'What is the advantage of globe-type design?',
            answer: 'Globe-type control valves provide excellent throttling characteristics, precise control, and good rangeability. The linear motion design allows for precise positioning and smooth operation throughout the control range.'
          },
          {
            question: 'What body configurations are available?',
            answer: 'Globe-type control valves are available in straight-through, angle, and Y-pattern configurations, each offering different flow characteristics and pressure drop profiles.'
          },
          {
            question: 'What trim options are available?',
            answer: 'We offer various trim options including equal percentage, linear, and quick-opening characteristics, as well as different materials for different applications and service conditions.'
          },
          {
            question: 'Are these suitable for high-temperature applications?',
            answer: 'Yes, globe-type control valves can handle high temperatures up to 425°C with appropriate materials and trim selection, making them suitable for steam and high-temperature process applications.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, globe-type control valves are commonly automated with pneumatic or electric actuators and positioners for precise control in process control systems.'
          }
        ]
      },
      {
        id: 'non-return-valves',
        name: 'Non Return Valve',
        description: 'Check valves preventing reverse flow and protecting equipment in piping systems.',
        detailedDescription: 'Non-return valves (check valves) allow flow in one direction and prevent reverse flow. These valves protect equipment such as pumps and compressors from backflow damage. They are available in various designs including swing check, lift check, and wafer check configurations.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN100',
          temperatureRange: '-29°C to +425°C',
          material: 'Carbon Steel, Stainless Steel, Bronze, Ductile Iron',
          sizeRange: '1/2" to 48"',
          connectionType: 'Threaded, Flanged, Wafer'
        },
        applications: [
          'Pump protection',
          'Compressor protection',
          'Boiler feedwater',
          'Steam systems',
          'General industrial'
        ],
        faqs: [
          {
            question: 'What is a non-return valve?',
            answer: 'A non-return valve (check valve) allows flow in one direction and automatically closes to prevent reverse flow when the upstream pressure drops below the downstream pressure.'
          },
          {
            question: 'What is the cracking pressure?',
            answer: 'Cracking pressure is the minimum upstream pressure required to open the valve. It varies by design and size, typically ranging from 0.1 to 0.5 bar for most applications.'
          },
          {
            question: 'What types are available?',
            answer: 'We offer swing check valves, lift check valves, wafer check valves, and dual-plate check valves, each with different characteristics for various applications.'
          },
          {
            question: 'Are these suitable for vertical installation?',
            answer: 'Some designs (lift check, dual-plate) are suitable for vertical installation, while swing check valves require horizontal or specific orientation. Please consult our technical team for guidance.'
          },
          {
            question: 'What is the back pressure rating?',
            answer: 'Back pressure rating depends on design and size. Most check valves can handle full rated pressure in reverse direction, but it is recommended to avoid sustained back pressure to extend seat life.'
          }
        ]
      },
      {
        id: '2-way-diaphragm-control-valves',
        name: '2 Way Diaphragm Control Valves',
        description: 'Two-way diaphragm control valves for precise flow control in process applications.',
        detailedDescription: 'Two-way diaphragm control valves provide precise flow control using a flexible diaphragm that regulates flow based on control signal. These valves offer excellent sealing, smooth operation, and precise control characteristics. They are widely used in water treatment, chemical processing, and general process control applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN40',
          temperatureRange: '-20°C to +180°C',
          material: 'Carbon Steel, Stainless Steel, Bronze',
          sizeRange: '1/2" to 12"',
          connectionType: 'Threaded, Flanged'
        },
        applications: [
          'Water treatment',
          'Chemical processing',
          'Process control',
          'Flow regulation',
          'Pressure control'
        ],
        faqs: [
          {
            question: 'What is a diaphragm control valve?',
            answer: 'A diaphragm control valve uses a flexible diaphragm to regulate flow based on control signals. The diaphragm provides excellent sealing and smooth operation, making it ideal for precise flow control.'
          },
          {
            question: 'What is the control range?',
            answer: '2-way diaphragm control valves typically provide excellent control from 10% to 100% of maximum flow, with good linearity and repeatability throughout the operating range.'
          },
          {
            question: 'Are these suitable for slurry applications?',
            answer: 'Yes, diaphragm control valves can handle slurries and viscous fluids better than globe-type valves, as the diaphragm design reduces clogging and provides better flow characteristics for such applications.'
          },
          {
            question: 'What is the diaphragm material?',
            answer: 'Diaphragm materials include EPDM, NBR, PTFE, and specialized elastomers depending on application requirements including temperature, pressure, and fluid compatibility.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, 2-way diaphragm control valves are designed for use with pneumatic or electro-pneumatic actuators and positioners for precise control in automated systems.'
          }
        ]
      },
      {
        id: 'y-type-control-valves',
        name: 'Y Type',
        description: 'Y-pattern control valves for high-pressure drop and severe service applications.',
        detailedDescription: 'Y-type control valves feature a Y-pattern body design that provides improved flow characteristics and reduced pressure drop compared to standard globe valves. These valves are ideal for high-pressure drop applications, severe service conditions, and applications requiring extended trim life.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN25 to PN150',
          temperatureRange: '-29°C to +600°C',
          material: 'Carbon Steel, Stainless Steel, Alloy Steel',
          sizeRange: '1/2" to 12"',
          connectionType: 'Threaded, Flanged, Butt Weld'
        },
        applications: [
          'High-pressure drop applications',
          'Severe service',
          'Steam control',
          'Boiler feedwater',
          'Power generation'
        ],
        faqs: [
          {
            question: 'What is the advantage of Y-type design?',
            answer: 'Y-type control valves provide improved flow characteristics, reduced pressure drop, and extended trim life compared to standard globe valves. The Y-pattern design reduces erosion and improves flow efficiency.'
          },
          {
            question: 'Are these suitable for severe service?',
            answer: 'Yes, Y-type control valves are ideal for severe service applications including high-pressure drop, flashing, cavitation, and erosive conditions. They are commonly used in power generation and process industries.'
          },
          {
            question: 'What trim options are available?',
            answer: 'We offer various trim options including multi-stage pressure reduction trim, anti-cavitation trim, and erosion-resistant materials for different severe service applications.'
          },
          {
            question: 'What is the maximum pressure drop?',
            answer: 'Y-type control valves can handle very high pressure drops, with specialized trim options available for pressure drops exceeding 100 bar, making them suitable for critical applications.'
          },
          {
            question: 'Are these suitable for steam applications?',
            answer: 'Yes, Y-type control valves are excellent for steam applications, including high-pressure and superheated steam. They offer excellent control characteristics and extended service life in steam service.'
          }
        ]
      },
      {
        id: 'needle-valves',
        name: 'Needle Valves',
        description: 'Precision needle valves for fine flow rate control and instrumentation applications.',
        detailedDescription: 'Needle valves feature a sharp-pointed needle-shaped disc that provides precise flow control through fine adjustment. These valves are ideal for applications requiring accurate flow regulation, instrumentation, and low flow rates. They offer excellent shut-off capability and fine control.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN25 to PN100',
          temperatureRange: '-29°C to +425°C',
          material: 'Stainless Steel, Brass, Carbon Steel',
          sizeRange: '1/8" to 2"',
          connectionType: 'Threaded (NPT, BSP), Flanged'
        },
        applications: [
          'Instrumentation',
          'Fine flow control',
          'Sampling systems',
          'Gas systems',
          'Laboratory applications'
        ],
        faqs: [
          {
            question: 'What is a needle valve?',
            answer: 'A needle valve uses a sharp-pointed needle-shaped disc that moves in and out of a seat to provide precise flow control. The fine thread pitch allows for very precise adjustment of flow rate.'
          },
          {
            question: 'What is the control range?',
            answer: 'Needle valves provide excellent control from very low flow rates to full flow, with precise adjustment capability. They are ideal for applications requiring fine flow regulation.'
          },
          {
            question: 'Are these suitable for high-pressure applications?',
            answer: 'Yes, needle valves can handle high pressures up to PN100 (1500 PSI) or higher, making them suitable for high-pressure instrumentation and control applications.'
          },
          {
            question: 'What is the shut-off capability?',
            answer: 'Needle valves provide excellent shut-off capability, typically achieving bubble-tight shutoff (Class VI) when properly maintained and operated.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, needle valves can be automated with electric or pneumatic actuators, though manual operation is common for applications requiring fine adjustment. Automated versions are available for remote control applications.'
          }
        ]
      }
    ]
  },
  {
    key: 'accessories',
    title: 'ACCESSORIES',
    slug: 'accessories',
    description: 'Essential accessories and components for complete valve automation systems.',
    products: [
      {
        id: 'connector',
        name: 'Connector',
        description: 'High-quality connectors for pneumatic actuator installation and integration.',
        detailedDescription: 'Connectors are essential components for mounting actuators to valves and connecting pneumatic systems. Our connectors provide secure mounting, proper alignment, and reliable operation. Available in various configurations to suit different valve and actuator combinations.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'Standard mounting',
          material: 'Aluminum, Stainless Steel, Cast Iron',
          connectionType: 'ISO 5211, NAMUR'
        },
        applications: [
          'Actuator mounting',
          'Valve automation',
          'Pneumatic systems',
          'Industrial automation'
        ],
        faqs: [
          {
            question: 'What is a connector?',
            answer: 'A connector is a mounting bracket that connects pneumatic or electric actuators to valves. It ensures proper alignment, secure mounting, and reliable transmission of torque from the actuator to the valve.'
          },
          {
            question: 'What standards are followed?',
            answer: 'Our connectors comply with ISO 5211 and NAMUR standards, ensuring compatibility with standard actuators and valves from various manufacturers.'
          },
          {
            question: 'Are connectors universal?',
            answer: 'Connectors are designed for specific valve and actuator combinations. Proper selection ensures optimal performance and reliability. Our technical team can assist with connector selection.'
          },
          {
            question: 'What materials are available?',
            answer: 'Connectors are available in aluminum (lightweight), stainless steel (corrosion resistance), and cast iron (heavy-duty applications) depending on the application requirements.'
          },
          {
            question: 'Do connectors require maintenance?',
            answer: 'Connectors require minimal maintenance. Regular inspection for proper alignment, checking mounting bolts, and ensuring proper lubrication are recommended for extended service life.'
          }
        ]
      },
      {
        id: 'air-filter-regulator-lubricator',
        name: 'Air Filter + Regulator + Lubricator',
        description: 'Complete FRL units for clean, regulated, and lubricated compressed air supply.',
        detailedDescription: 'Air Filter, Regulator, and Lubricator (FRL) units provide clean, regulated, and lubricated compressed air to pneumatic actuators and valves. These units protect equipment from contaminants, maintain proper operating pressure, and ensure proper lubrication for extended service life.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'Up to 10 bar',
          flowCapacity: 'Various sizes available',
          material: 'Aluminum, Brass, Stainless Steel'
        },
        applications: [
          'Pneumatic actuator supply',
          'Air preparation',
          'Equipment protection',
          'System efficiency'
        ],
        faqs: [
          {
            question: 'What is an FRL unit?',
            answer: 'An FRL (Filter, Regulator, Lubricator) unit is a combination of three components: a filter to remove contaminants, a regulator to control pressure, and a lubricator to add oil to the air stream for equipment lubrication.'
          },
          {
            question: 'Why is air filtration important?',
            answer: 'Clean air extends equipment life by removing contaminants, moisture, and particles that can damage actuators, valves, and seals. Proper filtration is essential for reliable operation.'
          },
          {
            question: 'What is the purpose of the regulator?',
            answer: 'The regulator maintains consistent operating pressure regardless of supply pressure variations, ensuring optimal actuator performance and protecting equipment from pressure fluctuations.'
          },
          {
            question: 'Do all applications need lubrication?',
            answer: 'Not all applications require lubrication. Some actuators are designed for non-lubricated service. However, lubrication can extend service life and improve performance in many applications.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'FRL units require regular maintenance including filter element replacement, regulator adjustment, and lubricator refilling. Maintenance intervals depend on operating conditions and air quality.'
          }
        ]
      },
      {
        id: 'limit-switch-box',
        name: 'Limit Switch Box',
        description: 'Position feedback limit switches for valve position indication and control.',
        detailedDescription: 'Limit switch boxes provide position feedback for automated valves, indicating open and closed positions. These switches can be connected to control systems for monitoring, alarm functions, and interlocking. Available in various configurations with different switch types and mounting options.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          voltageRating: '24V DC, 110V AC, 220V AC',
          switchType: 'SPDT, DPDT',
          material: 'Aluminum, Stainless Steel',
          protection: 'IP65, IP67'
        },
        applications: [
          'Position indication',
          'Control system integration',
          'Safety interlocking',
          'Remote monitoring'
        ],
        faqs: [
          {
            question: 'What is a limit switch box?',
            answer: 'A limit switch box is an accessory that provides electrical position feedback for automated valves. It contains switches that activate when the valve reaches open or closed positions.'
          },
          {
            question: 'What types of switches are available?',
            answer: 'We offer various switch types including SPDT (single pole double throw), DPDT (double pole double throw), and multiple switch configurations for different control requirements.'
          },
          {
            question: 'Can limit switches be adjusted?',
            answer: 'Yes, limit switches are adjustable to activate at specific valve positions. Adjustment allows for precise position indication and control system integration.'
          },
          {
            question: 'What is the protection rating?',
            answer: 'Our limit switch boxes are rated IP65 or IP67, providing protection against dust and water ingress, making them suitable for outdoor and harsh environment applications.'
          },
          {
            question: 'Are these compatible with all actuators?',
            answer: 'Limit switch boxes are designed to mount on various actuator types. Proper selection ensures compatibility with your specific actuator and valve combination.'
          }
        ]
      },
      {
        id: 'namur-solenoid-valves',
        name: 'Namur Solenoid Valves',
        description: 'NAMUR standard solenoid valves for direct mounting on pneumatic actuators.',
        detailedDescription: 'NAMUR solenoid valves are designed to mount directly on pneumatic actuators according to NAMUR standards. These valves provide reliable pneumatic control for actuator operation. They are compact, easy to install, and offer excellent performance in industrial automation applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          voltageRating: '24V DC, 110V AC, 220V AC',
          pressureRating: '0.5-10 bar',
          material: 'Brass, Stainless Steel, Aluminum',
          connectionType: 'NAMUR standard'
        },
        applications: [
          'Actuator control',
          'Automated systems',
          'Process control',
          'Industrial automation'
        ],
        faqs: [
          {
            question: 'What is NAMUR standard?',
            answer: 'NAMUR is a standard interface for mounting solenoid valves directly on pneumatic actuators. It ensures compatibility and simplifies installation of solenoid valves on actuators.'
          },
          {
            question: 'What voltages are available?',
            answer: 'NAMUR solenoid valves are available in various voltage ratings including 24V DC, 110V AC, and 220V AC, suitable for different control system requirements.'
          },
          {
            question: 'Are these suitable for hazardous areas?',
            answer: 'Yes, we offer explosion-proof versions that are suitable for hazardous environments, meeting ATEX and IECEx standards for use in potentially explosive atmospheres.'
          },
          {
            question: 'What is the response time?',
            answer: 'NAMUR solenoid valves provide fast response times, typically 10-50 milliseconds, depending on size and voltage rating, ensuring quick actuator response.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'NAMUR solenoid valves require minimal maintenance. Regular inspection for proper operation, checking electrical connections, and cleaning if necessary are recommended for reliable service.'
          }
        ]
      },
      {
        id: 'pneumatic-positioners',
        name: 'Pneumatic Positioners',
        description: 'Precision pneumatic positioners for accurate valve positioning and control.',
        detailedDescription: 'Pneumatic positioners provide precise valve positioning based on control signals. These devices ensure accurate valve position regardless of pressure variations, friction, or other disturbances. They are essential for precise flow control in process control systems.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          inputSignal: '3-15 PSI, 4-20 mA',
          supplyPressure: 'Up to 6 bar',
          accuracy: '±0.5%',
          material: 'Aluminum, Stainless Steel'
        },
        applications: [
          'Precise flow control',
          'Process control systems',
          'Throttling applications',
          'Modulating control'
        ],
        faqs: [
          {
            question: 'What is a pneumatic positioner?',
            answer: 'A pneumatic positioner is a device that precisely positions a valve based on a control signal. It compares the valve position with the desired position and adjusts the actuator pressure to achieve the correct position.'
          },
          {
            question: 'What is the control accuracy?',
            answer: 'Our pneumatic positioners provide control accuracy of ±0.5% or better, ensuring precise valve positioning for accurate flow control in process applications.'
          },
          {
            question: 'What input signals are accepted?',
            answer: 'Pneumatic positioners accept pneumatic signals (3-15 PSI) or can be equipped with I/P converters to accept electrical signals (4-20 mA) from control systems.'
          },
          {
            question: 'Are positioners necessary for all applications?',
            answer: 'Positioners are essential for precise throttling and modulating control. For simple on/off operation, positioners may not be required, though they can still provide position feedback.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Positioners require periodic calibration, cleaning, and inspection. Regular maintenance ensures accurate positioning and reliable operation. Typical maintenance intervals are 6-12 months.'
          }
        ]
      }
    ]
  },
  {
    key: 'solenoid-valves',
    title: 'SOLENOID VALVES',
    slug: 'solenoid-valves',
    description: 'High-performance solenoid valves for reliable pneumatic and hydraulic control.',
    products: [
      {
        id: 'pulse-type-solenoid',
        name: 'Pulse Type',
        description: 'Pulse-type solenoid valves for precise control and energy-efficient operation.',
        detailedDescription: 'Pulse-type solenoid valves operate with short-duration electrical pulses to open and close. These valves provide precise control, low energy consumption, and fast response times. They are ideal for applications requiring precise control and energy efficiency.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          voltageRating: '24V DC, 110V AC, 220V AC',
          pressureRating: '0-10 bar',
          material: 'Brass, Stainless Steel, Plastic'
        },
        applications: ['Precise control', 'Energy-efficient systems', 'Automated systems'],
        faqs: [
          {
            question: 'What is a pulse-type solenoid valve?',
            answer: 'Pulse-type solenoid valves operate with short electrical pulses rather than continuous power, providing precise control while reducing energy consumption and heat generation.'
          },
          {
            question: 'What is the energy consumption?',
            answer: 'Pulse-type solenoid valves consume significantly less energy than standard solenoid valves as they only require power during the brief pulse duration, typically 50-100 milliseconds.'
          }
        ]
      },
      {
        id: 'pilot-operated-piston-type',
        name: 'Pilot Operated Piston Type Sov',
        description: 'Pilot-operated piston-type solenoid valves for high-flow applications.',
        detailedDescription: 'Pilot-operated piston-type solenoid valves use a small pilot valve to control a larger piston-operated main valve. These valves provide high flow capacity, low power consumption, and reliable operation in high-flow applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          voltageRating: '24V DC, 110V AC, 220V AC',
          pressureRating: '0.5-16 bar',
          material: 'Brass, Stainless Steel'
        },
        applications: ['High-flow applications', 'Large systems', 'Industrial automation'],
        faqs: [
          {
            question: 'How does pilot-operated design work?',
            answer: 'Pilot-operated valves use a small pilot valve (solenoid) to control the flow of pilot pressure that operates a larger piston. This design provides high flow capacity with low power consumption.'
          },
          {
            question: 'What is the maximum flow capacity?',
            answer: 'Pilot-operated piston-type solenoid valves can handle high flow rates, with capacities ranging from 10 to 300 GPM or more, depending on size and design.'
          }
        ]
      },
      {
        id: 'low-pressure-solenoid',
        name: 'Low Pressure',
        description: 'Low-pressure solenoid valves for specialized low-pressure applications.',
        detailedDescription: 'Low-pressure solenoid valves are designed specifically for low-pressure applications requiring reliable operation at pressures below 1 bar. These valves offer excellent sealing, fast response, and reliable performance in low-pressure systems.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          voltageRating: '24V DC, 12V DC',
          pressureRating: '0.01-1 bar',
          material: 'Brass, Stainless Steel, Plastic'
        },
        applications: ['Low-pressure systems', 'Medical equipment', 'Laboratory applications'],
        faqs: [
          {
            question: 'What is the minimum operating pressure?',
            answer: 'Low-pressure solenoid valves can operate at pressures as low as 0.01 bar (0.15 PSI), making them suitable for specialized low-pressure applications.'
          }
        ]
      },
      {
        id: 'direct-acting-solenoid',
        name: 'Direct Acting',
        description: 'Direct-acting solenoid valves for fast response and reliable operation.',
        detailedDescription: 'Direct-acting solenoid valves use the solenoid coil to directly operate the valve without a pilot. These valves provide fast response times, reliable operation, and can operate at zero pressure differential.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          voltageRating: '24V DC, 110V AC, 220V AC',
          pressureRating: '0-10 bar',
          material: 'Brass, Stainless Steel'
        },
        applications: ['Fast response applications', 'Low-pressure systems', 'General automation'],
        faqs: [
          {
            question: 'What is the advantage of direct-acting design?',
            answer: 'Direct-acting solenoid valves provide fast response times and can operate at zero pressure differential, making them suitable for applications requiring quick response and low-pressure operation.'
          }
        ]
      },
      {
        id: 'pilot-operated-diaphragm-type',
        name: 'Pilot Operated Diaphragm Type SOV',
        description: 'Pilot-operated diaphragm-type solenoid valves for clean fluid applications.',
        detailedDescription: 'Pilot-operated diaphragm-type solenoid valves use a diaphragm to separate the solenoid from the fluid. These valves provide excellent sealing, contamination-free operation, and are ideal for clean fluid applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          voltageRating: '24V DC, 110V AC, 220V AC',
          pressureRating: '0.5-10 bar',
          material: 'Brass, Stainless Steel, Plastic'
        },
        applications: ['Clean fluid applications', 'Water systems', 'Food and beverage'],
        faqs: [
          {
            question: 'What is the advantage of diaphragm design?',
            answer: 'Diaphragm-type solenoid valves provide excellent sealing by separating the solenoid from the fluid, ensuring contamination-free operation and extended service life.'
          }
        ]
      }
    ]
  },
  {
    key: 'lined-valves',
    title: 'LINED VALVES',
    slug: 'lined-valves',
    description: 'Corrosion-resistant lined valves for aggressive chemical and corrosive applications.',
    products: [
      {
        id: 'lined-control-valves',
        name: 'Lined Control Valves',
        description: 'PTFE or PFA-lined control valves for corrosive chemical applications.',
        detailedDescription: 'Lined control valves feature a corrosion-resistant lining (PTFE, PFA, or other materials) on the internal surfaces, making them ideal for handling aggressive chemicals and corrosive fluids. These valves provide excellent corrosion resistance and long service life in demanding applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          temperatureRange: '-20°C to +180°C',
          material: 'Carbon Steel with PTFE/PFA lining',
          sizeRange: '1/2" to 12"'
        },
        applications: ['Chemical processing', 'Corrosive fluids', 'Acid handling', 'Pharmaceutical'],
        faqs: [
          {
            question: 'What lining materials are available?',
            answer: 'We offer various lining materials including PTFE (Teflon), PFA, FEP, and specialized fluoropolymers depending on the application requirements and fluid compatibility.'
          }
        ]
      },
      {
        id: 'lined-diaphragm-valves',
        name: 'Lined Diaphragm Valves',
        description: 'Lined diaphragm valves for leak-free control of corrosive fluids.',
        detailedDescription: 'Lined diaphragm valves combine the leak-free operation of diaphragm valves with corrosion-resistant linings, making them ideal for handling aggressive chemicals and corrosive fluids with zero leakage.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          temperatureRange: '-20°C to +180°C',
          material: 'Carbon Steel with PTFE/PFA lining'
        },
        applications: ['Corrosive chemicals', 'Leak-free applications', 'Chemical processing'],
        faqs: [
          {
            question: 'What is the advantage of lined diaphragm valves?',
            answer: 'Lined diaphragm valves provide zero leakage and excellent corrosion resistance, making them ideal for handling aggressive chemicals where leak-free operation is critical.'
          }
        ]
      },
      {
        id: 'lined-non-return-valves',
        name: 'Lined Non Return Valves',
        description: 'Lined check valves preventing reverse flow of corrosive fluids.',
        detailedDescription: 'Lined non-return valves feature corrosion-resistant linings to prevent reverse flow in corrosive applications. These valves provide excellent corrosion resistance while maintaining reliable check valve operation.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          material: 'Carbon Steel with PTFE/PFA lining'
        },
        applications: ['Corrosive fluid applications', 'Chemical processing', 'Reverse flow prevention'],
        faqs: [
          {
            question: 'Why use lined check valves?',
            answer: 'Lined check valves provide corrosion resistance necessary for handling aggressive chemicals while preventing reverse flow, protecting equipment in corrosive applications.'
          }
        ]
      },
      {
        id: 'lined-butterfly-valves',
        name: 'Lined Butterfly Valves',
        description: 'Lined butterfly valves for cost-effective corrosion resistance in large diameters.',
        detailedDescription: 'Lined butterfly valves provide corrosion resistance in large diameter applications at a lower cost than fully alloy valves. These valves feature corrosion-resistant linings suitable for handling aggressive chemicals.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          material: 'Carbon Steel with PTFE/PFA lining',
          sizeRange: '2" to 48"'
        },
        applications: ['Large diameter applications', 'Chemical processing', 'Corrosive fluids'],
        faqs: [
          {
            question: 'What sizes are available?',
            answer: 'Lined butterfly valves are available in sizes from 2" up to 48" and larger, providing cost-effective corrosion resistance in large diameter applications.'
          }
        ]
      },
      {
        id: 'lined-plug-valves',
        name: 'Lined Plug Valves',
        description: 'Lined plug valves for reliable shut-off in corrosive applications.',
        detailedDescription: 'Lined plug valves combine the reliable shut-off of plug valves with corrosion-resistant linings, making them ideal for handling aggressive chemicals and corrosive fluids with tight shut-off.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          material: 'Carbon Steel with PTFE/PFA lining'
        },
        applications: ['Corrosive chemicals', 'Tight shut-off', 'Chemical processing'],
        faqs: [
          {
            question: 'What is the shut-off capability?',
            answer: 'Lined plug valves provide excellent shut-off capability, typically achieving bubble-tight shutoff (Class VI) when properly maintained and operated in corrosive applications.'
          }
        ]
      },
      {
        id: 'lined-ball-valve',
        name: 'Lined Ball Valve',
        description: 'Lined ball valves for quarter-turn operation in corrosive applications.',
        detailedDescription: 'Lined ball valves provide quick quarter-turn operation with corrosion-resistant linings, making them ideal for handling aggressive chemicals and corrosive fluids with reliable shut-off.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          material: 'Carbon Steel with PTFE/PFA lining'
        },
        applications: ['Corrosive chemicals', 'Quick shut-off', 'Chemical processing'],
        faqs: [
          {
            question: 'What is the advantage of lined ball valves?',
            answer: 'Lined ball valves provide quick quarter-turn operation with excellent corrosion resistance, making them ideal for handling aggressive chemicals with reliable shut-off.'
          }
        ]
      }
    ]
  },
  {
    key: 'pharmaceutical-valves',
    title: 'PHARMACEUTICAL VALVES',
    slug: 'pharmaceutical-valves',
    description: 'Sanitary and hygienic valves designed for pharmaceutical and biotech industries.',
    products: [
      {
        id: 'flush-bottom-ball-valves',
        name: 'Flush Bottom Ball Valves',
        description: 'Sanitary flush bottom ball valves for complete vessel drainage.',
        detailedDescription: 'Flush bottom ball valves are designed for complete vessel drainage with no dead legs or pockets where product can accumulate. These valves feature sanitary design, easy cleaning, and are ideal for pharmaceutical, biotech, and food applications requiring complete drainage.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          material: 'Stainless Steel 316L, polished',
          sizeRange: '1/2" to 4"',
          finish: 'Ra ≤ 0.4 μm'
        },
        applications: ['Pharmaceutical', 'Biotech', 'Food and beverage', 'Complete drainage'],
        faqs: [
          {
            question: 'What is a flush bottom valve?',
            answer: 'Flush bottom valves are designed to mount at the bottom of vessels with the valve body flush with the vessel interior, ensuring complete drainage with no dead legs or product accumulation.'
          },
          {
            question: 'What standards do they meet?',
            answer: 'Our flush bottom valves meet 3A, ASME BPE, and FDA standards for sanitary applications in pharmaceutical, biotech, and food industries.'
          }
        ]
      },
      {
        id: 'pharmaceutical-butterfly-valves',
        name: 'Pharmaceutical Butterfly Valves',
        description: 'Sanitary butterfly valves designed for pharmaceutical and biotech applications.',
        detailedDescription: 'Pharmaceutical butterfly valves feature sanitary design, polished surfaces, and FDA-compliant materials for use in pharmaceutical and biotech applications. These valves provide easy cleaning, validation support, and reliable operation in hygienic systems.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          material: 'Stainless Steel 316L, polished',
          finish: 'Ra ≤ 0.4 μm',
          sizeRange: '2" to 12"'
        },
        applications: ['Pharmaceutical', 'Biotech', 'Sanitary systems', 'Hygienic applications'],
        faqs: [
          {
            question: 'What certifications are available?',
            answer: 'Our pharmaceutical butterfly valves meet 3A, ASME BPE, and FDA standards, with documentation and validation support for pharmaceutical applications.'
          }
        ]
      },
      {
        id: 'pharmaceutical-control-valves',
        name: 'Pharmaceutical Control Valves',
        description: 'Sanitary control valves for precise flow control in pharmaceutical processes.',
        detailedDescription: 'Pharmaceutical control valves feature sanitary design, polished surfaces, and FDA-compliant materials for precise flow control in pharmaceutical and biotech processes. These valves provide accurate control, easy cleaning, and validation support.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN16',
          material: 'Stainless Steel 316L, polished',
          finish: 'Ra ≤ 0.4 μm'
        },
        applications: ['Pharmaceutical processes', 'Biotech', 'Precise control', 'Sanitary systems'],
        faqs: [
          {
            question: 'What validation support is provided?',
            answer: 'We provide documentation and validation support including IQ/OQ documentation, material certificates, and cleaning validation support for pharmaceutical applications.'
          }
        ]
      }
    ]
  },
  {
    key: 'prv-safety-valves',
    title: 'PRV SAFETY VALVES',
    slug: 'prv-safety-valves',
    description: 'Pressure relief and safety valves for equipment protection and system safety.',
    products: [
      {
        id: 'drum-valves',
        name: 'Drum Valves',
        description: 'Drum valves for safe handling and transfer of liquids from drums and containers.',
        detailedDescription: 'Drum valves are designed for safe and efficient handling of liquids from drums and containers. These valves provide easy operation, leak-free sealing, and are available in various configurations for different drum types and applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          material: 'Stainless Steel, Brass, Plastic',
          connectionType: 'Various drum thread sizes'
        },
        applications: ['Drum handling', 'Liquid transfer', 'Container applications'],
        faqs: [
          {
            question: 'What types of drums are supported?',
            answer: 'Our drum valves are available for various drum types including standard 55-gallon drums, metric drums, and specialized containers with different thread sizes.'
          }
        ]
      },
      {
        id: 'pressure-reducing-valves',
        name: 'Pressure Reducing Valves',
        description: 'Pressure reducing valves for maintaining downstream pressure at safe levels.',
        detailedDescription: 'Pressure reducing valves (PRVs) automatically reduce high upstream pressure to a lower downstream pressure, maintaining consistent downstream pressure regardless of upstream variations. These valves protect equipment and ensure safe operation.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN100',
          temperatureRange: '-29°C to +200°C',
          material: 'Carbon Steel, Stainless Steel, Bronze'
        },
        applications: ['Pressure control', 'Equipment protection', 'System safety', 'Steam systems'],
        faqs: [
          {
            question: 'How do pressure reducing valves work?',
            answer: 'Pressure reducing valves use a spring-loaded diaphragm or piston to automatically maintain downstream pressure. When downstream pressure drops, the valve opens to increase flow, and when pressure rises, it closes to maintain set pressure.'
          },
          {
            question: 'What is the control accuracy?',
            answer: 'Our pressure reducing valves provide control accuracy of ±5% or better, maintaining consistent downstream pressure regardless of upstream pressure variations.'
          }
        ]
      },
      {
        id: 'safety-valves',
        name: 'Safety Valves',
        description: 'Safety valves protecting equipment and personnel from overpressure conditions.',
        detailedDescription: 'Safety valves are critical safety devices that automatically open when system pressure exceeds the set pressure, relieving excess pressure to protect equipment and personnel. These valves must meet strict performance standards and provide reliable operation in emergency conditions.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN420',
          temperatureRange: '-196°C to +600°C',
          material: 'Carbon Steel, Stainless Steel, Alloy Steel',
          standards: 'ASME, API, ISO'
        },
        applications: ['Overpressure protection', 'Equipment safety', 'Personnel safety', 'System protection'],
        faqs: [
          {
            question: 'What standards do safety valves meet?',
            answer: 'Our safety valves meet ASME, API, and ISO standards for safety valve performance, including set pressure accuracy, blowdown, and capacity requirements.'
          },
          {
            question: 'What is the set pressure accuracy?',
            answer: 'Safety valves provide set pressure accuracy within ±3% of set pressure, ensuring reliable operation when system pressure reaches the set point.'
          },
          {
            question: 'Are regular inspections required?',
            answer: 'Yes, safety valves require regular inspection and testing (typically annually or per regulatory requirements) to ensure reliable operation in emergency conditions.'
          }
        ]
      },
      {
        id: 'float-valves',
        name: 'Float Valves',
        description: 'Float valves for automatic liquid level control in tanks and reservoirs.',
        detailedDescription: 'Float valves use a float mechanism to automatically control liquid level by opening and closing based on liquid level. These valves maintain consistent liquid levels in tanks, reservoirs, and storage vessels without external power.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'Up to PN16',
          material: 'Brass, Stainless Steel, Bronze',
          connectionType: 'Threaded, Flanged'
        },
        applications: ['Tank level control', 'Reservoir control', 'Automatic filling', 'Liquid level maintenance'],
        faqs: [
          {
            question: 'How do float valves work?',
            answer: 'Float valves use a float connected to a valve mechanism. When liquid level drops, the float lowers, opening the valve to allow flow. When level rises, the float lifts, closing the valve to stop flow.'
          },
          {
            question: 'Do float valves require power?',
            answer: 'No, float valves operate automatically based on liquid level without requiring external power, making them ideal for remote locations and applications without power supply.'
          }
        ]
      },
      {
        id: 'direct-activated-pressure-reducing-valve-flanged',
        name: 'Direct-Activated-Pressure-Reducing-Valve-Flanged',
        description: 'Direct-activated pressure reducing valve with flanged connections for automatic pressure control.',
        detailedDescription: 'Direct-activated pressure reducing valves with flanged connections provide automatic reduction of high upstream pressure to a lower downstream pressure. These self-acting valves use direct mechanical actuation to maintain consistent downstream pressure regardless of upstream variations. Featuring robust flanged connections, they are ideal for pipeline installations where reliable pressure control is critical for equipment protection and system safety.',
        imageUrl: '/assets/product/images/Direct-Activated-Pressure-Reducing-Valve-Flanged.webp',
        model3D: '/assets/product/3d_model/pressure reducing valve 3d model.glb',
        specifications: {
          pressureRating: 'PN16 to PN100',
          temperatureRange: '-29°C to +200°C',
          material: 'Carbon Steel, Stainless Steel, Ductile Iron',
          sizeRange: '1/2" to 12"',
          connectionType: 'Flanged (RF, RTJ)',
          controlAccuracy: '±5%',
          pressureRange: '0.5 bar to 25 bar'
        },
        applications: [
          'Steam distribution systems',
          'Water supply networks',
          'Compressed air systems',
          'Process control systems',
          'Equipment protection',
          'Pipeline pressure regulation'
        ],
        faqs: [
          {
            question: 'How does direct-activated pressure reducing valve work?',
            answer: 'Direct-activated pressure reducing valves use the downstream pressure directly acting on a diaphragm or piston to control the valve opening. When downstream pressure rises above the set point, the valve closes to reduce flow. When pressure drops, the valve opens to increase flow, maintaining consistent downstream pressure automatically.'
          },
          {
            question: 'What is the advantage of flanged connections?',
            answer: 'Flanged connections provide secure, leak-free installation and easy maintenance. They are ideal for pipeline systems where the valve needs to be removed for service without cutting the pipeline. Flanged connections also provide excellent structural support for larger valves.'
          },
          {
            question: 'What pressure ranges are available?',
            answer: 'Our direct-activated pressure reducing valves are available for pressure ranges from 0.5 bar to 25 bar downstream pressure. The valves can handle upstream pressures up to 40 bar depending on size and material configuration.'
          },
          {
            question: 'Are these suitable for steam applications?',
            answer: 'Yes, these valves are excellent for steam applications. Special versions are available with appropriate materials and trim for high-temperature steam service, typically up to 200°C. Proper installation and orientation are important for steam applications.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Direct-activated pressure reducing valves require minimal maintenance. Regular inspection for proper operation, checking for leaks, and periodic cleaning of the strainer (if installed) are recommended. The valve may need periodic recalibration if pressure regulation accuracy degrades over time.'
          },
          {
            question: 'Can the set pressure be adjusted?',
            answer: 'Yes, the downstream set pressure can be adjusted using the adjusting screw on the valve. The adjustment range depends on the valve model and spring configuration. Proper adjustment requires pressure gauges and should follow manufacturer guidelines.'
          }
        ]
      }
    ]
  },
  {
    key: 'plug-valves',
    title: 'PLUG VALVES',
    slug: 'plug-valves',
    description: 'Reliable plug valves for tight shut-off and flow control in various applications.',
    products: [
      {
        id: 'metal-to-metal-plug-valves',
        name: 'Metal To Metal Plug Valves',
        description: 'Metal-seated plug valves for extreme temperature and abrasive applications.',
        detailedDescription: 'Metal-to-metal plug valves use metal sealing surfaces for reliable operation in extreme temperatures, high pressures, and abrasive services. These valves provide excellent durability and tight shut-off in demanding applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN100',
          temperatureRange: '-196°C to +600°C',
          material: 'Carbon Steel, Stainless Steel, Alloy Steel'
        },
        applications: ['Extreme temperatures', 'Abrasive media', 'High pressure', 'Fire-safe applications'],
        faqs: [
          {
            question: 'What is the advantage of metal-to-metal seats?',
            answer: 'Metal-to-metal seats provide excellent performance in extreme temperatures, high pressures, abrasive media, and fire-safe applications where soft seats would fail.'
          }
        ]
      },
      {
        id: '2-way-plug-valves',
        name: '2 Way Plug Valves',
        description: 'Two-way plug valves for reliable shut-off and flow control.',
        detailedDescription: 'Two-way plug valves provide reliable shut-off and flow control with quarter-turn operation. These valves feature a cylindrical or tapered plug that rotates to open and close, providing tight shut-off and minimal pressure drop.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN63',
          material: 'Carbon Steel, Stainless Steel, Bronze'
        },
        applications: ['General purpose', 'Reliable shut-off', 'Flow control', 'Quarter-turn operation'],
        faqs: [
          {
            question: 'What is the shut-off capability?',
            answer: '2-way plug valves provide excellent shut-off capability, typically achieving bubble-tight shutoff (Class VI) when properly maintained and operated.'
          }
        ]
      },
      {
        id: '3-way-plug-valves',
        name: '3 Way Plug Valves',
        description: 'Three-way plug valves for flow diversion and mixing applications.',
        detailedDescription: 'Three-way plug valves feature multiple flow paths for flow diversion, mixing, or distribution. These valves provide flexible flow control solutions for complex piping systems requiring multiple flow patterns.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN63',
          material: 'Carbon Steel, Stainless Steel, Bronze'
        },
        applications: ['Flow diversion', 'Flow mixing', 'Distribution', 'Multiple flow paths'],
        faqs: [
          {
            question: 'What flow patterns are available?',
            answer: '3-way plug valves can divert flow between two ports, mix flows from two sources, or distribute flow, providing flexible flow control solutions for various applications.'
          }
        ]
      },
      {
        id: 'jacketed-plug-valve',
        name: 'Jacketed Plug Valve',
        description: 'Jacketed plug valves for temperature control in process applications.',
        detailedDescription: 'Jacketed plug valves feature an external jacket for steam or heat transfer fluid circulation, maintaining process temperature. These valves prevent product solidification or maintain process temperature in demanding applications.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN16 to PN40',
          material: 'Carbon Steel, Stainless Steel',
          jacketPressure: 'Up to 6 bar'
        },
        applications: ['Temperature control', 'Hot processes', 'Prevent solidification', 'Process heating'],
        faqs: [
          {
            question: 'What is the jacket pressure rating?',
            answer: 'Jacketed plug valves typically have jacket pressure ratings up to 6 bar (90 PSI) for steam or heat transfer fluid circulation.'
          },
          {
            question: 'What fluids can be used in the jacket?',
            answer: 'The jacket can use steam, hot oil, or other heat transfer fluids depending on the application requirements and temperature range.'
          }
        ]
      }
    ]
  },
  {
    key: 'knife-edge-gate-valves',
    title: 'KNIFE EDGE GATE VALVES',
    slug: 'knife-edge-gate-valves',
    description: 'Knife gate valves for handling viscous fluids, slurries, and solids in suspension.',
    products: [
      {
        id: 'uni-directional-knife-gate',
        name: 'Uni-Directional',
        description: 'Uni-directional knife gate valves for one-way flow with tight shut-off.',
        detailedDescription: 'Uni-directional knife gate valves are designed for one-way flow applications where the gate seals against a seat on one side. These valves provide tight shut-off, excellent wear resistance, and reliable operation with viscous fluids and slurries.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN25',
          temperatureRange: '-20°C to +150°C',
          material: 'Carbon Steel, Stainless Steel, Ductile Iron',
          sizeRange: '2" to 48"'
        },
        applications: ['Viscous fluids', 'Slurries', 'Solids in suspension', 'Pulp and paper', 'Wastewater treatment'],
        faqs: [
          {
            question: 'What is a knife gate valve?',
            answer: 'Knife gate valves use a sharp-edged gate to cut through viscous fluids and solids, providing reliable shut-off in applications with thick fluids, slurries, and suspended solids.'
          },
          {
            question: 'What is the difference between uni-directional and bi-directional?',
            answer: 'Uni-directional knife gate valves seal on one side only, suitable for one-way flow. Bi-directional valves can seal from either direction, suitable for applications where flow direction may change.'
          },
          {
            question: 'Are these suitable for abrasive applications?',
            answer: 'Yes, knife gate valves are designed for abrasive applications with hardened gates and seats, making them ideal for handling abrasive slurries and solids in suspension.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, knife gate valves can be automated with pneumatic or electric actuators. Actuator selection should account for the higher operating torque required for cutting through viscous fluids.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Knife gate valves require regular inspection for wear on the gate and seat, especially in abrasive applications. Periodic replacement of gates and seats may be needed based on operating conditions.'
          }
        ]
      },
      {
        id: 'bi-directional-knife-gate',
        name: 'By Directional',
        description: 'Bi-directional knife gate valves for flow from either direction.',
        detailedDescription: 'Bi-directional knife gate valves can seal from either direction, making them suitable for applications where flow direction may change. These valves provide tight shut-off, excellent wear resistance, and reliable operation with viscous fluids and slurries from either direction.',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/05/04/03/ball-valve-3378661_1280.jpg',
        specifications: {
          pressureRating: 'PN10 to PN25',
          temperatureRange: '-20°C to +150°C',
          material: 'Carbon Steel, Stainless Steel, Ductile Iron',
          sizeRange: '2" to 48"'
        },
        applications: ['Bi-directional flow', 'Viscous fluids', 'Slurries', 'Changing flow direction', 'Pulp and paper'],
        faqs: [
          {
            question: 'What is the advantage of bi-directional design?',
            answer: 'Bi-directional knife gate valves can seal from either direction, making them suitable for applications where flow direction may change or where isolation may be needed from either side.'
          },
          {
            question: 'Are these suitable for reversing flow?',
            answer: 'Yes, bi-directional knife gate valves are specifically designed for applications with reversing flow direction, providing reliable shut-off regardless of flow direction.'
          },
          {
            question: 'What is the sealing capability?',
            answer: 'Bi-directional knife gate valves provide excellent shut-off capability in both directions, typically achieving bubble-tight shutoff when properly maintained and operated.'
          },
          {
            question: 'Can these be automated?',
            answer: 'Yes, bi-directional knife gate valves can be automated with pneumatic or electric actuators. Actuator selection should account for the operating torque required for reliable operation.'
          },
          {
            question: 'What maintenance is required?',
            answer: 'Bi-directional knife gate valves require regular inspection for wear on both sealing surfaces, especially in abrasive applications. Periodic replacement of gates and seats may be needed based on operating conditions.'
          }
        ]
      }
    ]
  }
];

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};

// Helper function to get product by ID and category slug
export const getProductById = (categorySlug: string, productId: string): Product | undefined => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.products.find(prod => prod.id === productId);
};

// Helper function to get all products for a category
export const getProductsByCategory = (categorySlug: string): Product[] => {
  const category = getCategoryBySlug(categorySlug);
  return category ? category.products : [];
};


