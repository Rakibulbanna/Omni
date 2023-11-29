
'use client';
import { Grid, Typography } from '@mui/material';
import FAQSection from '../../components/FAQSection';
import LandingPageButton from '../../components/LandingPageButton';
import { useState } from 'react';
import { AutoCompleteWrapper } from '../../components/AutoCompleteWrapper';

const faqData = [
  {
    header: 'What is Expandable ?',
    content_body: 'The Expandable Lorem ipsum zsxr dcftvgybhuji kolawse drftgyh ujikol wsedrft gyhujiko dolor sit amet, consectetur adipisicing elit. Illo, voluptatibus aut est deleniti accusamus vel. Reprehenderit, facilis maxime. Illo, quae quam! Ad harum explicabo reiciendis minima minus incidunt, quasi, accusantium aliquam quisquam maiores earum dignissimos officia saepe consequuntur quia tempora nihil aperiam numquam dolore culpa nemo suscipit temporibus. Tempore quasi dolor vitae beatae reprehenderit deserunt asperiores ut recusandae, non fugit quo culpa velit modi adipisci rerum mollitia deleniti sequi, eligendi blanditiis quisquam dolorem cumque quod. Obcaecati fuga labore minima assumenda, facere sed quis illum blanditiis architecto veritatis similique quas perspiciatis id nesciunt soluta, dolores vero rerum dignissimos a eveniet sapiente. component is a collapsible and expandable component used for FAQ sections or any other scenario where you want to provide collapsible and expandable content.',
    icon: {
      collapse: "v",
      expand: "^"
    }
  },
  {
    header: 'How can you use the Expandable component?',
    content_body: 'You  can use the component by providing a header, an icon (optional), and the body content. When the header is clicked, the body content will be expanded or collapsed.',

  },
  {
    header: 'How can you dvfbghgn weretrhtj adsfghn dfbgnhg ewrebgnr  fw ?',
    content_body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde saepe provident beatae officiis esse? Nulla, explicabo inventore. Quae nemo, libero voluptatum veritatis harum et a. Pariatur, veniam quaerat? Deserunt quidem voluptates placeat reprehenderit, dicta repellendus sapiente. Natus exercitationem eveniet saepe explicabo dolorem, animi excepturi vel consequatur cupiditate fuga, sunt voluptatibus. (optional), and the body content. When the header is clicked, the body content will be expanded or collapsed.',

  },
  {
    header: 'How canmponent?',
  },
];
export default function Home() {
  const [group, setgroup] = useState(['fve', 'wrvwv'])
  const [v, setv] = useState(null)

  return (
    <>
    <Grid container spacing={2} gap={2} paddingTop={2} border='1px solid lightGray' p={2} >
      
        <AutoCompleteWrapper
          label={'efw'}
          placeholder={'wfwrfv'}
          options={group}
          value={v}
          handleChange={(e, v) => setv(v)}
        />
      


    </Grid>

</>
  )
}