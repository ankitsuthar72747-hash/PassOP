import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
    const ref = useRef()
    const pass = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passtype, setpasstype] = useState("password")
    const [passwordArray, setPasswordArray] = useState([])
    const [index, setindex] = useState(null)
    const [visiblePasswords, setVisiblePasswords] = useState({})

    const togglePasswordVisibility = (id) => {
        setVisiblePasswords(prev => ({ ...prev, [id]: !prev[id] }))
    }
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showpassword = () => {
        if (ref.current.src.includes("icons/eye.png")) {

            ref.current.src = "icons/eyecross.png"
            setpasstype("text")
        }
        else {

            ref.current.src = "icons/eye.png"
            setpasstype("password")
        }
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }
    const passline = () => {
        if (pass.current.type.includes("text"))
            pass.current.type = "password"
        else
            pass.current.type = "text"
    }
    const savepass = () => {
        if (form.site.trim().length > 3 && form.username.trim().length > 3 && form.password.trim().length > 3) {

            toast.info('Saved!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide
            });
            let newArray = [...passwordArray]
            if (index != null) {
                newArray.splice(index, 0, { ...form, id: uuidv4() })
                setindex(null)
            } else {
                newArray.push({ ...form, id: uuidv4() })
            }
            setPasswordArray(newArray)
            localStorage.setItem("passwords", JSON.stringify(newArray))
            setform({ site: "", username: "", password: "" })
        }
        else {
            toast.error('Not Saved!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide
            });

        }
    }
    const copytext = (text) => {
        toast.info('Copied To Clipboard!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide
        });
        navigator.clipboard.writeText(text)
    }
    const deletepassword = (id) => {
        toast.info('Password Deleted!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide
        });
        let c = confirm("Confirm delete?")
        if (confirm) {
            setPasswordArray(passwordArray.filter(item => item.id != id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
        }
    }
    const editpassword = (id) => {
        setindex(passwordArray.findIndex(i => i.id === id))
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id != id))
        // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!=id)))
    }




    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                theme="colored"
                transition={Slide}
            />
            <div className="fixed inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
            <div className='mycontainer'>
                <h1 className='md:pt-0 pt-15 text-3xl flex justify-center md:w-full font-bold '>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='flex justify-center text-green-800 md:text-lg text-xl md:w-full font-semibold  pt-1 pb-4'>Your Own Password Manager</p>

                <div className='text-white flex flex-col items-center p-4 pt-10 md:py-30 py-10 md:gap-8 gap-4 md:w-full '>
                    <input value={form.site} onChange={handlechange} type="text" placeholder='Enter your Website URL' className='rounded-full text-gray-500 bg-white border border-green-400 w-full py-3 p-4' name="site" />
                    <div className='flex md:flex-row flex-col justify-center md:gap-8 gap-4 w-full'>
                        <input value={form.username} onChange={handlechange} type="text" placeholder='Enter your Username' className='w-full rounded-full text-gray-500 bg-white border border-green-400 py-3  p-4' name="username" />
                        <div className='relative w-full'>

                            <input value={form.password} type={passtype} ref={pass} onChange={handlechange} placeholder='Enter your Password' className=' rounded-full text-gray-500  bg-white border border-green-400 py-3 w-full p-4' name="password" autoComplete="new-password"
    data-lpignore="true" />
                            <span className='absolute right-2 cursor-pointer  text-black md:top-0.5 top-1.5' onClick={showpassword} >
                                <img ref={ref} onClick={passline} className='p-2 w-10' src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button className='flex items-center w-fit justify-center bg-green-500 md:px-6 px-4 py-2 text-black text-lg font-semibold gap-2 rounded-full border border-green-900  hover:bg-green-400' onClick={savepass}>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password
                    </button>
                </div>
                <div>
                    <h2 className='font-bold md:w-full text-xl md:text-2xl md:p-0 p-4 py-4 md:py-2 mt-4'>
                        Your Passwords
                    </h2>
                    {passwordArray.length === 0 && <div className='font-semibold md:text-xl text-lg w-full md:pl-0 pl-4'>No Passwords To Show</div>}
                    {passwordArray.length != 0 &&
                        <div className='flex flex-col justify-center items-center'>

                            <table className="table-auto rounded-md overflow-hidden md:w-full mb-10">
                                <thead className='bg-green-800 text-white'>
                                    <tr>
                                        <th className='py-2 text-sm md:text-lg'>Site</th>
                                        <th className='py-2 text-sm md:text-lg'>Username</th>
                                        <th className='py-2 text-sm md:text-lg'>Password</th>
                                        <th className='py-2 text-sm md:text-lg'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-green-100 text-lg'>
                                    {passwordArray.map((item, index) => {
                                        return <tr key={index}>
                                            <td className='text-center w-32 md:py-2 py-3 border-b-[0.2px] pr-4 border-r border-r-green-500/10  border-white'>
                                                <div className='flex justify-center items-center'>
                                                    <div className='md:min-w-100 w-25 md:text-lg text-sm'>
                                                        <a href={item.site} target='_blank' className='break-all'>{item.site}</a>
                                                    </div>
                                                    <div className='cursor-pointer copyicon' onClick={() => { copytext(item.site) }}>

                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            stroke="bold"
                                                            style={{ "width": "20px", "height": "20px" }}
                                                        >
                                                        </lord-icon>
                                                    </div>

                                                </div>
                                            </td>
                                            <td className='text-center w-32 py-2 border-b-[0.2px] pr-4 border-r border-r-green-500/10 border-white'>
                                                <div className='flex justify-center items-center'>
                                                    <div className='md:min-w-85 break-all md:text-lg text-sm'>
                                                        {item.username}
                                                    </div>
                                                    <div className='cursor-pointer copyicon' onClick={() => { copytext(item.username) }}>

                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            stroke="bold"
                                                            style={{ "width": "20px", "height": "20px" }}
                                                        >
                                                        </lord-icon>
                                                    </div>

                                                </div>
                                            </td>
                                            <td className='text-center w-22 py-2 border-b-[0.2px] border-r-[0.2px] md:pr-4 border-r-green-500/10 border-white'>
                                                <div className='flex justify-center items-center md:min-w-85'>
                                                    <div className='md:min-w-70 break-all md:text-lg text-sm'>

                                                        {visiblePasswords[item.id] ? item.password : '•'.repeat(item.password.length)}
                                                    </div>
                                                    <div className='cursor-pointer copyicon ' onClick={() => { copytext(item.password) }}>

                                                    
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            stroke="bold"
                                                            style={{ "width": "20px", "height": "20px" }}
                                                        >
                                                        </lord-icon>
                                                    </div>
                                                    <span className='cursor-pointer text-black shrink-0' onClick={() => togglePasswordVisibility(item.id)}>
                                                        <img
                                                            className='m-1'
                                                            style={{ width: "18px", height: "18px", objectFit: "contain" }}
                                                            src={visiblePasswords[item.id] ? "icons/eyecross.png" : "icons/eye.png"}
                                                            alt="eye"
                                                        />
                                                    </span>


                                                </div></td>
                                            <td className='text-center md:w-32 py-2 border-b-[0.2px]  border-white md:pr-8'>
                                                <div className='md:w-30 w-15 md:ml-6 md:pl-2'>

                                                    <span className='mx-2 md:mx-1' onClick={() => { editpassword(item.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                                            trigger="hover"
                                                            stroke="bold"
                                                            style={{ "width": "20px", "height": "20px" }}>
                                                        </lord-icon>
                                                    </span>
                                                    <span className='mx-2' onClick={() => { deletepassword(item.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                            stroke="bold"
                                                            style={{ "width": "20px", "height": "20px" }}>
                                                        </lord-icon>
                                                    </span>
                                                </div>

                                            </td>
                                        </tr>

                                    })}

                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div >
        </>
    )
}

export default Manager
