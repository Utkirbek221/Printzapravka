import React, { useState } from 'react'
import axios from 'axios'

export default function Registor() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [response, setResponse] = useState('')
    const [isPhoneValid, setIsPhoneValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)

    const handleSendMessage = async () => {
        let valid = true;
        
        // Validate phone number
        if (phone.length < 9) {
            setIsPhoneValid(false)
            setPhone('')
            valid = false
        } else {
            setIsPhoneValid(true)
        }

        // Validate name
        if (!name.trim()) {
            setIsNameValid(false)
            valid = false
        } else {
            setIsNameValid(true)
        }

        if (!valid) return

        const botToken = '7700550211:AAECxaS4ixtQyoEShFkOQzRquNbG1ghfras'
        const chatId = '1005236949'
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

        const message = `Yangi xabar:\nIsm: ${name}\nFamiliya: ${surname}\nTelefon: +998${phone}`

        try {
            const res = await axios.post(telegramApiUrl, {
                chat_id: chatId,
                text: message,
            })

            if (res.data.ok) {
                setResponse('Xabar muvaffaqiyatli yuborildi!')
                setName('')
                setSurname('')
                setPhone('')
                // 3 sekunddan keyin xabarni o'chirish
                setTimeout(() => setResponse(''), 3000)
            } else {
                setResponse('Xabar yuborishda xatolik yuz berdi')
            }
        } catch (error) {
            console.error('Telegramga xabar yuborishda xatolik:', error)
            setResponse('Xabar yuborishda xatolik yuz berdi')
        }
    }

    return (
        <div className='min-h-[600px] bg-[#1F2937] py-20'>
            <div className='container flex justify-center items-center'>
                <div className='border border-gray-600 rounded-2xl p-5'>
                    <div className='lg:flex-row justify-center items-center gap-10'>
                        <div>
                            <h2 className='text-[29px] font-bold text-white text-center mb-10'>Связаться с нами</h2>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                            <div className='w-full'>
                                <form className='flex flex-col gap-4 min-w-[300px] md:min-w-[400px] mx-auto' onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        placeholder={!isNameValid ? "Ism kiritish majburiy" : "Имя"}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className={`w-full p-3 rounded-lg bg-[#1F2937] border ${!isNameValid ? 'border-red-500' : 'border-[#4B5563]'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]`}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Фамилия"
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
                                        className='w-full p-3 rounded-lg bg-[#1F2937] border border-[#4B5563] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]'
                                    />
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">+998</span>
                                        <input
                                            type="number"
                                            placeholder={!isPhoneValid ? "Telefon raqam noto'g'ri" : "94 051 14 94"}
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className={`w-full p-3 pl-16 rounded-lg bg-[#1F2937] border ${!isPhoneValid ? 'border-red-500' : 'border-[#4B5563]'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]`}
                                        />
                                    </div>
                                    <button
                                        onClick={handleSendMessage}
                                        type="button"
                                        className='w-full p-3 mt-4 rounded-lg text-[#A5B4FC] font-semibold hover:opacity-90 transition-opacity'
                                        style={{ background: '#6366F133' }}
                                    >
                                        Отправить
                                    </button>
                                    {response && (
                                        <p className={`text-center mt-2 ${response.includes('xatolik') ? 'text-red-500' : 'text-green-500'}`}>
                                            {response}
                                        </p>
                                    )}
                                </form>
                            </div>

                            <div className='w-full h-[250px] rounded-lg overflow-hidden mt-4 md:mt-0'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.0066227583649!2d69.27983332923091!3d41.24238799476054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE0JzMyLjYiTiA2OcKwMTYnNDcuNCJF!5e0!3m2!1sen!2s!4v1703158693010!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
