import { useState, useEffect } from 'react'
// import EditModal from './EditModal'
import styled from 'styled-components'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch } from 'react-redux';
import Sidebar from '../utils/Sidebar';
import '../admin.css'
import Header from '../components/Header';
// import { addProductapi, editProductapi } from '../redux/apiCalls/productsApis';


const Container = styled.div`
  margin: 1rem 0;
  display: grid;
  gap: 1rem;
  margin-left:3rem;
  width:70%;
  @media (max-width: 800px) { //added this bza left side was overflowing
    margin-left: 1em;
  }
`
const Section = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`
const Left = styled.div`
  flex: 1;

`
const Right = styled.div`
  flex: 2;
`
const UploadImage = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed black;
  padding: 1rem;
label
  > svg {
    color: teal;
  }
`
const ImagePreview = styled.image`
  width: 100%;
  margin: 0.5rem 0;
`
const UploadTitle = styled.span`

`
const UploadDesc = styled.p`
  font-size: 0.7rem;
`

const Textarea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 5rem;
    resize: vertical;
    padding: 0.9rem 0.5rem;
    background-color: #F4F5F7;
    border: 1px rgb(229,231,235) solid;
    border-radius: 1vmin;
    font-size: 1.1rem;
    outline-color: lightblue;
`
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.9rem 0.5rem;
  background-color: #F4F5F7;
  border: 1px rgb(229,231,235) solid;
  border-radius: 1vmin;
  font-size: 1.1rem;
  outline: none;

  :focus  {
    background-color: white;
  }
`

const TagSection = styled.div`
  display: flex;
  background-color: #F4F5F7;
  flex-wrap: wrap;

  > input {
    border-radius: 0;
    border: none;
    
  }
`

const Tag = styled.div`
  margin: 0.8rem 0.4rem;
  background-color: #E1E1E1;
  background-color: ${p => p.color ? p.color : "#E1E1E1"};
  
  display: flex;
  width: max-content;

  >:first-child {
    color: ${p => p.color ? "white" : "black"};
    margin: auto;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    
    
  }

  >:last-child {
    font-size: 0.8rem;
    background-color: #D4D4D4;
  }

`

function AdminCreate
    ({ isOpen, setIsOpen, EditProductInfo, title, desc }) {
    const DefaultValues = { title: "", productno: "", size: [], color: [], pattern: [], shortDesc: "", longDesc: "", categories: [], quantity: "", price: "", image: [] }

    //   const dispatch = useDispatch();
    const [Product, setProduct] = useState(DefaultValues)

    const handleChange = (e, type) => {
        var { name, value } = e.target;
        const property = type || name
        console.log("input changed on " + title)
        const prev = Product[property]; //we ddnt used Product.property bcz iw will find a field where the key is property but in this cal it will find the value of property
        
        if (name === "image") {
            value=e.target.files[0].name;
            console.log(value, "image")
            const file = e.target.files[0];
            const filereader = new FileReader();
            filereader.readAsDataURL(file);
            filereader.onload = () => {
                console.log("image changed on " + title)
                setProduct(p => ({ ...p, image: Array.isArray(prev) ? [...prev, value] : value }))
            }
            return
        }

        if (Array.isArray(prev)) {
            const exist = prev.filter(i => i === value.toUpperCase())
            if (exist?.length) return //TODO: add Errors

        }
        setProduct((p) => ({ ...p, [property]: Array.isArray(prev) ? [...prev, value.toUpperCase()] : value })) //if it's array then append or setValue

        e.target.value = "";
    }

    const onSubmit = async () => {

    }

    const handleDelete = (property, value) => {
        setProduct(p => ({ ...p, [property]: p[property].filter(i => i !== value) }))
    }

    useEffect(() => {
        console.log(Product)
    }, [Product])


    const [isSidebar, setIsSidebar] = useState(true);
    const ifForImf = Math.random() * 1000 //this is used Because image id was chasing bcz this component was rendered 2 time 1 for add and another for update
    return (
        // <EditModal isOpen={isOpen} setIsOpen={setIsOpen} action={handleSubmit} title={title} desc={desc}>
        <div style={{ display: 'flex' }}>
            <Sidebar isSidebar={isSidebar} />
            <Container>
                <Header title={"Add Product"} subtitle={"Create new product here"} />
                <Section>
                    <Left>
                        <label>Product Image</label>
                    </Left>
                    <Right>

                        <input accept="image/jpeg, image/png" name='image' type="file" style={{ display: "none" }} id={ifForImf} onChange={e => handleChange(e,"image")} />
                        <label htmlFor={ifForImf}>
                            {Product?.image?.map((s) => {
                                return <Tag key={s}>
                                    <span>
                                        <img src={s} alt={s}/>
                                        </span><div onClick={() => handleDelete("image", s)}><CloseOutlinedIcon /></div>
                                </Tag>
                            })}
                            <UploadImage>
                                <CloudUploadOutlinedIcon />
                                <UploadTitle>Drag your image here</UploadTitle>
                                <UploadDesc>(Only *.jpeg and *.png images will be accepted)</UploadDesc>
                            </UploadImage>
                            
                        </label>
                    </Right>
                </Section>

                <Section>
                    <Left><label>Product Name/Title</label></Left>
                    <Right><Input name="title" value={Product.title} onChange={e => handleChange(e)} /></Right>
                </Section>

                <Section>
                    <Left><label>Product Number</label></Left>
                    <Right><Input name="productno" value={Product.productno} onChange={e => handleChange(e)} /></Right>
                </Section>

                <Section>
                    <Left><label>Product Size</label></Left>
                    <Right>
                        <TagSection>
                            {Product?.size?.map((s) => {
                                return <Tag key={s}>
                                    <span>{s}</span><div onClick={() => handleDelete("size", s)}><CloseOutlinedIcon /></div>
                                </Tag>
                            })}
                            <Input placeholder='Sizes (Write and press Enter)' name="size" onKeyDown={e => { if (e.key === "Enter") handleChange(e, "size") }} />
                        </TagSection>
                    </Right>
                </Section>

                <Section>
                    <Left><label>Product Pattern</label></Left>
                    <Right>
                        <TagSection>
                            {Product?.pattern?.map((s) => {
                                return <Tag key={s}>
                                    <span>{s}</span><div onClick={() => handleDelete("pattern", s)}><CloseOutlinedIcon /></div>
                                </Tag>
                            })}
                            <Input placeholder='Pattern (Write and press Enter)' name="pattern" onKeyDown={e => { if (e.key === "Enter") handleChange(e, "pattern") }} />
                        </TagSection>
                    </Right>
                </Section>

                <Section>
                    <Left><label>Product Color</label></Left>
                    <Right>
                        <TagSection>
                            {Product?.color?.map((s) => {
                                return <Tag key={s} color={s}>
                                    <span >{s}</span><div onClick={() => handleDelete("color", s)}><CloseOutlinedIcon /></div>
                                </Tag>
                            })}
                            <Input placeholder='Colour (Write and press Enter)' name="color" onKeyDown={e => { if (e.key === "Enter") handleChange(e, "color") }} />
                        </TagSection>
                    </Right>
                </Section>

                <Section>
                    <Left><label>Product Short Description</label></Left>
                    <Right><Textarea name="shortDesc" value={Product.shortDesc || ""} onChange={e => handleChange(e)} /></Right>
                </Section>


                <Section>
                    <Left><label>Product Long Description</label></Left>
                    <Right><Textarea name="longDesc" value={Product.longDesc || ""} onChange={e => handleChange(e)} /></Right>
                </Section>

                <Section>
                    <Left><label>Product Category</label></Left>
                    <Right>
                        <TagSection>
                            {Product?.categories?.map((s) => {
                                return <Tag key={s}>
                                    <span>{s}</span><div onClick={() => handleDelete("categories", s)}><CloseOutlinedIcon /></div>
                                </Tag>
                            })}
                            <Input placeholder='Categories (Write and press Enter)' name="categories" onKeyDown={e => { if (e.key === "Enter") handleChange(e, "categories") }} />
                        </TagSection>
                    </Right>
                </Section>

                <Section>
                    <Left><label>Product Quantity</label></Left>
                    <Right><Input type="number" name="quantity" value={Product.quantity} onChange={e => handleChange(e)} /></Right>
                </Section>

                <Section>
                    <Left><label>Product Price</label></Left>
                    <Right><Input type="number" name="price" value={Product.price} onChange={e => handleChange(e)} /></Right>
                </Section>

                <div className='button-box-admin' style={{ marginTop: '2rem' }}>
                    <button type='submit'>
                        <span>Add Product</span>
                    </button>
                </div>


            </Container>
        </div>
    )
}

export default AdminCreate
