import NextLink from 'next/link'

export default function Home() {
  return (<>
  <div className='ui container' style={{textAlign:'center',marginTop:'13em'}}>
    <div  className="ui huge header" style={{color:'#0247a8'}}>
      Hi , I am Anand Mohanan
    </div>
    
    <NextLink href='https://discordapp.com/users/376632059923267584/'>
      <i className='big discord link icon' />
    </NextLink>
    <NextLink href='https://www.instagram.com/ananth_mohanan/'>
      <i className='big instagram link icon' />
    </NextLink>
    <NextLink href='https://github.com/ananth7112001'>
      <i className='big github link icon' />
    </NextLink>
    <NextLink href='mailto:ananthkvmohanan@gmail.com'>
      <i className='big envelope link icon' />
    </NextLink>
  </div></>);
}
