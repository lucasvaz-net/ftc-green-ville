import Image from "next/image"
import { ListaAdmData } from "@/data/lista-ad.data"
import Link from "next/link"

export default function HomeBar() {
    return (

        <div className="fixed h-screen w-[306px] bg-[#252525] flex  items-center pt-[5%] rounded-r-lg flex-col left-[0]">
            <Image src={"/logo-branco.png"} alt="logo" width={152} height={97} />

            <div className="w-[200px] grid gap-8 mt-10 relative">
                {ListaAdmData.map((obejto, index) => (
                    <Link href={obejto.link} key={index} className="flex w-[100%] h-[20px] justify-between items-center">
                        <Image src={obejto.img} alt="icones imagens" width={obejto.w} height={obejto.h} />
                        <span
                            className=" text-lg text-[#DBDBDB]"
                        >{obejto.titulo}</span>
                        <Image src={"/arrow.png"} alt="seta" width={22} height={14} />
                    </Link>
                ))}
            </div>

            <div className="absolute flex w-[200px] justify-between items-center top-[90%]">
                <Image src={"/avatar.png"} alt="icone avatar" width={42} height={42} />
                <div className="grid">
                    <span className="text-[#fff]">Sophia</span>
                    <span className="text-[#757575]">Admin</span>
                </div>
                <Image src={"/arrow.png"} alt="seta" width={22} height={14} />
            </div>
        </div>


    )
}