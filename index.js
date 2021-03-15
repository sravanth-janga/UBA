const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const morgan = require('morgan');


const app = express();
const port = process.env.PORT||8000;
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'public')));
app.use('/css',express.static(path.join(__dirname,'node_modules','bootstrap','dist','css')));
app.use('/js',express.static(path.join(__dirname,'node_modules','bootstrap','dist','js')));
app.use('/js',express.static(path.join(__dirname,'node_modules','jquery','dist')));
app.use('/js',express.static(path.join(__dirname,'node_modules','@popperjs','core','dist','umd')));
app.use('/css',express.static(path.join(__dirname,'node_modules','@splidejs','splide','dist','css')));
app.use('/js',express.static(path.join(__dirname,'node_modules','@splidejs','splide','dist','js')));
app.use('/css',express.static(path.join(__dirname,'node_modules','bootstrap-icons','font')));


app.set('view engine','ejs');

var data = [{
    title:"What is UBA?",
    icon:'',
    text:[`UBA is an initiative launched by the Ministry of Education (MoE) (earlier Ministry Human
        Resource Development (MHRD)) in the presence of The President of India on 11th November
        2014 that aims at the vision of groundbreaking change in country improvement measures by
        utilizing knowledge institutions to help fabricate the design of an Inclusive India.`]
},
{
    title:"NEED OF UBA",
    icon:'',
    text:[`Rural India somehow lags behind urban India in development due to a lack of schemes and a gap
    between government policies and its recipients because these policies fail to arrive at the
    country's remotest pieces.`
    ,`
    It is a tedious task to bridge this gap in the country of 1.39 billion. Still, there is a need for it for
    the technological, social, and administerial advancement of rural India.`]
},
{
    title:"MISSION OF UBA",
    icon:'',
    text:[`UBA plans to make a dynamic connection between the general public and the higher educational
    institutes. The latter gives the information and innovation backing to improve the jobs in rural
    zones and redesign the abilities of both the general public and private associations society.`]
},{
    title:"OBJECTIVES OF UBA",
    icon:`<i class="btn-success bi bi-check"></i>`,
    text:[`Assemble a comprehension of the improvement plan inside Higher Education establishments
    and an institutional capacity and prepare according to the public requirements, particularly those
    of rural India.`,
    `Re-underline the requirement for fieldwork, partner associations, and plan for cultural targets
    as the premise of higher education.`,
    `Weigh on thorough reporting and valuable outputs as integral to growing new professions.`,
    ` Encourage another discourse inside the more significant local area on science, society, and
    the climate and build up a feeling of pride and destiny.`,
    `Improving the advancement results as an outcome of the research and growing new processes
    to maintain and retain the research results.`,
    `To furnish rural India and territorial organizations with admittance to the expert assets of the
    foundations of advanced education, particularly those that have gained literary greatness in the
    field of science, designing and innovation, and management.`,
  
]
}
]

app.get('/',(req,res)=>{
    res.render(path.join(__dirname,'public','test.ejs'),{title:"myapp",data:data});
});


app.listen(port,()=>{
    
})