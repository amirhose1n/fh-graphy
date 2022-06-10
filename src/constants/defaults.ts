const defaultConstants = {
    SKILLS: {
      Languages: [
        {value:"JavaScript",level:85} ,
        {value:"ES6+",level:85},
        {value :"HTML5",level:90},
        {value:"CSS3", level:90},
        {value:"SASS",level:80},
        {value:"Solidity",level:50}
        ],
      Core: [
          {value:"React JS",level:90}, 
          {value:"React Native",level:50}, 
          {value:"React Hooks and Context",level:95},
          {value:"Next JS",level:85}, 
          {value:"Redux",level:90},
          {value:"Telegraf JS",level:70},
          {value:"Express JS",level:60},
          {value:"Mongo DB",level:60},
          {value:"Web3(blockchain)",level:80},
          {value:"Smart Contract(solidity + blockchain)",level:60},
        ],
        UI_LIBS: ['Styled Components', 'Ant Design', 'Pug', 'Draft.js', 'Responsive and Semantic UI', 'Tailwind','Bootstrap'] ,
        Testing: ['Jest', 'React Testing Library'],
        Tooling: ['Git',' VS Code', 'ESLint', 'TypeScript', 'Yarn', 'NPM', 'Prettier', 'Webpack', 'Babel', 'Github'],
        Network:[ 'RESTful HTTP','Socket.io', 'GraphQL', 'ETH Smart Contract'],
        More: ['DOM', 'Web APIs',' PWA',' Service Workers', 'SEO', 'Cross-browser Compatibility', 'Scrum', 'Agile', 'Jira', 'Zeplin', 'Figma']      
    },
    SECTIONS : [
        {value:'ABOUT',href:'about'},
        {value:'EXPERIENCES',href:'experience'},
        {value:'SKILLS',href:'skilss'},
        {value:'SOCIALS',href:'socials'},
        {value:'DOWNLOAD PDF',href:'download_pdf'},
    ],
    ABOUT_ME:`I'm an experienced Front-end developer with a main focus on
Javascript. As a developer I always keep myself updated on new
technologies. Not only I'm always looking for new improvements on the
frontend technologies but also I like to extend my knowledge on the
backend. As a hobby I do skateboarding which helps me clear my mind
after work. skateboarding for almost 8 years taught me to be
consistent in learning and development.`,
    CODE_LINES : 33 ,
    CODE :
    `<span style = "color:#2885cd">class</span><span style = "color:#4ec9b0"> <span style = "color:#4ec9b0">Person</span> </span><span style = "color:#d9c87e">{</span>
        <span style = "color:#2885cd">constructor</span><span style = "color:pink">(</span><span style = "color:#3cc0fb">firstname</span><span style = "color:white">,</span> <span style = "color:#3cc0fb">lastname</span><span style = "color:white">,</span> <span style = "color:#3cc0fb">birthDate</span><span style = "color:white">,</span>  <span style = "color:#3cc0fb">hobbies</span><span style = "color:white"> = </span><span style = "color:#2885cd"><span style = "color:#d9c87e">[</span><span style = "color:#d9c87e">]</span></span><span style = "color:pink">)</span> <span style = "color:pink">{</span>
          <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb">firstName</span><span style = "color:white"> = </span><span style = "color:#3cc0fb">firstname</span><span style = "color:white">;</span>
          <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb">lastName</span><span style = "color:white"> = </span><span style = "color:#3cc0fb">lastname</span><span style = "color:white">;</span>
          <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb">birthDate</span><span style = "color:white"> = </span><span style = "color:#3cc0fb"><span style = "color:#2885cd">new</span> <span style = "color:#4ec9b0">Date</span>(birthDate)</span><span style = "color:white">;</span>
          <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb">hobbies</span><span style = "color:white"> = </span><span style = "color:#3cc0fb">hobbies</span><span style = "color:white">;</span>
        <span style = "color:pink">}</span>
      
        <span style = "color:#d9c87e">addSkill</span><span style = "color:white"> = </span><span style = "color:#2885cd">function</span> <span style = "color:pink">(</span><span style = "color:#3cc0fb">_skill</span><span style = "color:pink">)</span> <span style = "color:pink">{</span>
            <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb"><span style = "color:#3cc0fb">hobbies</span></span><span style = "color:white">.</span><span style = "color:#d9c87e">push</span><span style = "color:#2885cd">(</span><span style = "color:#3cc0fb">_skill</span><span style = "color:#2885cd">)</span><span style = "color:white">;</span>
            <span style = "color:pink">}</span><span style = "color:white">;</span>
        
        <span style = "color:#d9c87e">getInformations</span><span style = "color:white"> = </span><span style = "color:pink">()</span> <span style = "color:#2885cd"> = ></span> <span style = 'color:pink'>{</span>
            <span style = "color:pink">return</span> <span style = "color:#2885cd">{</span>
              <span style = "color:#3cc0fb">firstName</span>: <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb">firstName</span><span style = "color:white">,</span>
              <span style = "color:#3cc0fb">lastName</span>: <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb">lastName</span><span style = "color:white">,</span>
              <span style = "color:#3cc0fb">age</span>:
                <span style = "color:#2885cd">new</span> <span style = "color:#4ec9b0">Date</span><span style = "color:#d9c87e">(</span><span style = "color:#4ec9b0">Date</span><span style = "color:white">.</span><span style = "color:#d9c87e">now</span><span style = "color:pink">()</span> <span style = "color:pink"></span><span style = "color:white">-</span> <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb">birthDate</span><span style = "color:white">.</span><span style = "color:#d9c87e">getTime</span><span style = "color:pink">()</span><span style = "color:#d9c87e">)</span><span style = "color:white">.</span><span style = "color:#d9c87e">getUTCFullYear</span><span style = "color:pink">()</span> <span style = "color:white">-</span> <span style = "color:#d9c87e">1970</span><span style = "color:white">,</span>
              <span style = "color:#3cc0fb">hobbies</span>: <span style = "color:#2885cd">this</span><span style = "color:white">.</span><span style = "color:#3cc0fb">hobbies</span><span style = "color:white">,</span>
            <span style = "color:#2885cd">}</span><span style = "color:white">;</span>
            <span style = 'color:pink'>}</span><span style = "color:white">;</span>
          <span style = "color:#d9c87e">}</span>
        
        <span style = "color:#2885cd">const</span> <span style = "color:#3cc0fb">hobbies</span><span style = "color:white"> = </span><span style = "color:#d9c87e">[</span>
          <span style = "color:#bd8571">"Traveling"</span><span style = "color:white">,</span>
          <span style = "color:#bd8571">"Coding"</span><span style = "color:white">,</span>
          <span style = "color:#bd8571">"Camping"</span><span style = "color:white">,</span>
          <span style = "color:#bd8571">"Video Games"</span><span style = "color:white">,</span>
          <span style = "color:#bd8571">"Skateboarding"</span><span style = "color:white">,</span>
        <span style = "color:#d9c87e">]</span><span style = "color:white">;</span>
        
        <span style = "color:#2885cd">const</span> <span style = "color:#3cc0fb">me</span><span style = "color:white"> = </span><span style = "color:#2885cd">new</span> <span style = "color:#4ec9b0">Person</span><span style = "color:#d9c87e">(</span><span style = "color:#bd8571">"Amirhosein"</span><span style = "color:white">,</span> <span style = "color:#bd8571">"Farhoodi"</span><span style = "color:white">,</span> <span style = "color:#bd8571">"</span><span style = "color:#bd8571">1997</span><span style = "color:white">,</span><span style = "color:#bd8571">5</span><span style = "color:white">,</span><span style = "color:#bd8571">11</span><span style = "color:#bd8571">"</span><span style = "color:white">,</span> <span style = "color:#3cc0fb">hobbies</span><span style = "color:#d9c87e">)</span><span style = "color:white">;</span>
        <span style= "color:#568647">// You can access me by opening the console </span>`,
        EXPERIENCES : [
          {
            link:'https://www.zencats.io',
            title:'Zencats, Freelance - Senior Frontend developer',
            time:'Oct 2021 - Present (5 mos)',
            description:`Zencats is an under-construction platform in the NFT market.,
Working on the main SSR website using NextJs, Typescript and tailwind, Ethereum, and MetaMask libraries.
Research and development Web3 and Ethereum network for blockchain requirements.
Implementing features with openSea platform APIs.`,
          },
          {
            link:'https://lawmingo.com/',
            title:'Lawmingo, Freelance - Senior Frontend developer',
            time:'Jan 2020 - Jul 2021 (1 yr, 7 mos)',
            description:`Lawmingo is a legal platform for signing and arranging online contracts with more than 1 million users.
Develop web applications acting as the admin panel of the system using ReactJS, TypeScript, React-Redux, 
and Bootstrap. 
Implement User-facing SSR website using NextJS, TypeScript, React-Redux, and Bootstrap.
Research and development mobile application using React Native, TypeScript.`,
          },
          {
            link:'https://www.takhfifan.com',
            title:'Takhfifan/Netbarg - Frontend developer ',
            time:'Dec 2018 - Dec 2019 (1 yr, 1 mo)',
            description:`Takhfifan and Netbarg are the merged e-commerce platforms for online shopping and selling discount coupons 
with more than 2 million users. Manage common admin panel for Netbarg and Takhfifan products such as web 
applications.
I was Responsible for the maintenance of the main websites of the business, Netbarg, and Takhfifan, and for 
providing ideas for optimizing for thousands of visits per .`,
          },
          {
            title:'Peeyade - Frontend developer',
            time:'Jan 2016 - Nov 2018 (2 yr, 11 mos)',
            description:`Peeyade is a mobile and web application for city tourism in Tehran and it is where I started my career. 
Implement a SSR website with NextJS, React-Redux, and Bootstrap.
DevelopedPeeyade main application with more than 200,000 users, uses React js, NextJS (SSR), Redux, Ant 
Design, Sass.
Manage Peeyade admin panel is the CMS platform and back-office for all Peeyade’s products such as web application, and marketing needs with about 200 local users.
            `,
          },
        ],
        SOCIALS:[
          {href:'mailto:farhoodiamirhosein@gmail.com',title:'gmail',img:'/socials/gmail.webp'},
          {href:'https://www.linkedin.com/in/amirhosein-farhoodi-a52597169/',title:'linkedin',img:'/socials/linkedin.webp'},
          {href:'https://github.com/amirhose1n',title:'github',img:'/socials/github.webp'},
          {href:'https://www.instagram.com/amirhose1n',title:'instagram',img:'/socials/instagram.webp'},
        ]
};

export default defaultConstants;


                                                              


                                                                                               


                                                                                                                     
