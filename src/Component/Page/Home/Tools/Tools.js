import useTools from '../../../Shared/useTools';
import Part from './Part';
import PartThree from './PartThree';
import PartTwo from './PartTwo';
import './Tools.css'
import Loading from '../../../Shared/Navbar/Loading/Loading';


const Tools = () => {

    const [parts, isLoading] = useTools()
    const partsSlice = parts?.slice(1, 2)
    const partTwo = parts?.slice(2, 3)
    const partThree = parts?.slice(3, 4)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='background-modification'>

                <div className='lg:w-5/6 mx-auto'>
                    <br />
                    <div >
                        <h2 className='text-4xl font-bold color  theFonts'> All Parts </h2>
                    </div>
                </div>

                <div className='partOneMarginTopRes' >
                    {
                        partsSlice?.map(p => {
                            return <Part part={p} key={p._id} ></Part>
                        })

                    }
                </div>
            </div>

            <div className='partTwoMarginTopRes'>
                {
                    partTwo?.map(p => {
                        return <PartTwo part={p} key={p._id} isLoading={isLoading}></PartTwo>
                    })
                }
            </div>

            <div className='partThreeMarginTopRes'>
                {
                    partThree?.map(p => {
                        return <PartThree part={p} key={p._id} isLoading={isLoading}></PartThree>
                    })
                }
            </div>
        </div>
    );
};

export default Tools;