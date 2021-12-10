import React from 'react'
import { ListServ } from '../components/listServ';

interface Props {
    
}

 const Test = (props: Props) => {
    return (
        <div className='w-full h-full overflow-x-scroll overflow-y-hidden scrollmandx'>
                <div className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='lol' detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur unde ullam cum dicta natus, eum quaerat? Cum amet magnam eaque eum. Distinctio fuga assumenda iusto, voluptatibus nobis mollitia incidunt!' />
                </div>
                <div className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='lol' detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur unde ullam cum dicta natus, eum quaerat? Cum amet magnam eaque eum. Distinctio fuga assumenda iusto, voluptatibus nobis mollitia incidunt!' />
                </div>
                <div className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='lol' detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur unde ullam cum dicta natus, eum quaerat? Cum amet magnam eaque eum. Distinctio fuga assumenda iusto, voluptatibus nobis mollitia incidunt!' />
                </div>
                <div className='inline-block px-10 h-full w-full sectscroll'>
                <ListServ title='lol' detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur unde ullam cum dicta natus, eum quaerat? Cum amet magnam eaque eum. Distinctio fuga assumenda iusto, voluptatibus nobis mollitia incidunt!' />
                </div>
            </div>
    )
}
export default Test;