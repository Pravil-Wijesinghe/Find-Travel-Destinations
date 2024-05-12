import { useEffect, useRef, useState } from 'react';
import bgVideo from '../assets/bgVideo.mp4';
import Filter from '../assets/filter.png';
import Search from '../assets/search.png';
import DownArrow from '../assets/down-arrow.png';
import Close from '../assets/close.png';
import Chat from '../assets/chat.png';

function Recomondation() {
    const textAreaRef = useRef(null);
    const recommendationRef = useRef(null);
    const [val, setVal] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const [searched, setSearched] = useState(false);
    const [tagValue, setTagValue] = useState([]);
    const [tags, setTags] = useState([]);

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val])

    const handleFilterClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleSearch = () => {
        setSearched(true);
        if (recommendationRef.current) {
            recommendationRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const addTags = (e) => {
        if (e.keyCode === 13 && tagValue){
            setTags([...tags, tagValue]);
            setTagValue('');
        }
    }

    const deleteTag = (val) => {
        let remainTags = tags.filter((t) => t !== val);
        setTags(remainTags);
    }

    return (
        <div className='relative bg-blackBlue'>
            <div className='absolute top-0 left-0 w-full h-screen bg-blackBlue opacity-50'></div>
            <video src={bgVideo} autoPlay loop muted className='w-screen h-screen object-cover'/>
            <div className='absolute top-12 transform -translate-y-1/2 w-full text-lightBlue flex items-center flex-col gap-14 font-roboto font-semibold'>
                <h1 className='text-5xl'>Search Your Trip</h1>
            </div>
            <div className='absolute top-0 h-screen w-full text-lightBlue flex items-center justify-center flex-col gap-14 font-roboto font-semibold'>
                <div className='w-[950px] rounded-2xl p-4 bg-White text-darkGradientBlue text-opacity-70'>
                    <div className='font-medium flex flex-col items-center mt-6 gap-5'>
                        <div className='flex flex-col'>
                            <label className='ml-3 mb-1'>Enter your description:</label>
                            <div className='rounded-2xl p-[1px] pb-[6px] bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue'>
                                <input className='w-[830px] bg-lightBlue rounded-2xl p-1 px-3 active:outline-none focus:outline-none' placeholder='Where do you want to go?' value={val} onChange={handleChange} rows="1" ref={textAreaRef}/>
                            </div>
                        </div>
                        <div className='flex flex-row place-items-center gap-4'>
                            {!isExpanded && (
                                <button onClick={handleSearch} className='text-sm bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue w-[150px] outline-none text-White p-2 rounded-full flex flex-row justify-center gap-1 place-items-center'>
                                    <img src={Search} alt="" className='w-[16px]'/>
                                    Search
                                </button>
                            )}
                            <button onClick={handleFilterClick} className='text-sm bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue w-[150px] outline-none text-White p-2 rounded-full flex flex-row justify-center gap-1 place-items-center'>
                                <img src={Filter} alt="" className='w-[16px]'/>
                                {isExpanded ? 'Hide Filters' : 'Filter More'}
                            </button>
                        </div>
                        {isExpanded && (
                            <div className='flex flex-col items-center'>
                                <div className='justify-center gap-2 flex flex-col'>
                                    <div className='flex flex-col'>
                                        <label className='ml-3 mb-1'>Enter Tags:</label>
                                        <div className='rounded-2xl p-px pb-[6px] bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue'>
                                            <div className='h-8 w-[830px] bg-lightBlue rounded-full outline-none flex overflow-hidden'>
                                                {tags.map((tag, index) => {
                                                    return (
                                                        <button className='p-3 m-[3px] bg-White rounded-full flex items-center gap-[5px] cursor-default' key={index}>
                                                            {tag}
                                                            <button onClick={() => deleteTag(tag)} className='cursor-pointer w-3'><img src={Close} alt=''/></button>
                                                        </button>
                                                    )
                                                })}
                                                <input type='text' className='h-8 w-[830px] bg-lightBlue rounded-full p-3 outline-none'
                                                    placeholder='Enter tags'
                                                    onChange={(e) => setTagValue(e.target.value)}
                                                    onKeyDown={addTags}
                                                    value={tagValue}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='ml-3 mb-1'>Enter Country:</label>
                                        <div className='rounded-2xl p-px pb-[6px] bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue'>
                                            <input type='text' className='h-8 w-[830px] bg-lightBlue rounded-full p-3 outline-none' placeholder='Enter country'/>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleSearch} className='mt-4 text-sm bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue w-[150px] outline-none text-White p-2 rounded-full flex flex-row justify-center gap-1 place-items-center'>
                                    <img src={Search} alt="" className='w-[16px]'/>
                                    Search
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {searched && (
                    <div>
                        <button onClick={handleSearch} className='flex flex-col items-center'>
                            <p>See your recomondation</p>
                            <img src={DownArrow} alt='' className='w-[32px]'/>
                        </button>
                    </div>
                )}
            </div>
            <div ref={recommendationRef} className='flex flex-col justify-center items-center'>
                {searched && (
                    <div className='m-24 w-9/12 rounded-3xl p-[2px] bg-gradient-to-b from-lightGradientBlue to-darkGradientBlue'>
                        <div className='p-5 h-fit rounded-3xl bg-gradient-to-b from-[#131A22] to-[#191D24] text-lightBlue text-center'>
                            <p className="text-xl">Here are your travel recommendations...</p>
                        </div>
                    </div>
                )}
            </div>
            <button className='fixed bottom-8 right-8 text-sm bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue w-[160px] outline-none text-White p-2 rounded-full flex flex-row justify-center gap-1 place-items-center'
                onClick={() => window.location.href = '/chat'} >
                <img src={Chat} alt=''className='w-[16px]'/>
                Chat with bot
            </button>
        </div>
    )
}

export default Recomondation;
