import React from 'react';

// Import colour related functions
import { selectDarkMode, selectSvgColours } from '../../store/colourSchemeSlice';
import { useAppSelector } from '../../store/hooks';

export function CertificationSvg() {
    const darkMode = useAppSelector(selectDarkMode);
    const allColours = useAppSelector(selectSvgColours);

    // Set active colours depending on if dark mode is active
    let colours = darkMode ? allColours.dark : allColours.light;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="575.45508" height="668.31863" viewBox="0 0 575.45508 668.31863" >
            <path d="M887.72754,709.08824H733.27246v-2h.00015A152.45493,152.45493,0,0,0,885.72754,554.63332V446.84068h2Z" transform="translate(-312.27246 -115.84068)" fill={colours.light}/>
            <path d="M466.28967,319.488a114.22783,114.22783,0,0,1-12.55762,3.9713c-5.62552,1.371-8.80168,2.00651-14.2313-.10074-.19073-.074-.37274-.14719-.54445-.21916a57.67862,57.67862,0,0,1-35.10473-52.299c-.02717-.38357-.02717-.78688-.02717-1.18035a56.19182,56.19182,0,0,1,.27141-5.67544,57.37007,57.37007,0,0,1,1.23014-7.63289l-.05427-.00984c-4.396-4.49514-6.08745-10.6526-5.52665-16.83954A27.8324,27.8324,0,0,1,412.31794,218.689a44.03242,44.03242,0,0,1,18.28053-6.45254,46.32618,46.32618,0,0,1,5.25531-.30492h16.49858a71.2821,71.2821,0,0,1,10.35686-1.63284h.02711c33.20525-2.75411,59.39135,19.25926,56.94911,46.04317-.01811.02954-.04521.059-.06332.08855-.70551,1.15082-1.32963,2.24262-1.88144,3.28525-.53364.97377-.9859,1.90822-1.37484,2.7935-3.0302,6.846,11.36992,113.06125,6.205,114.67433-2.93972.91476-14.789-78.123-12.6634-63.09339C512.58492,332.946,481.58713,313.83322,466.28967,319.488Z" transform="translate(-312.27246 -115.84068)" fill={colours.darkest} />
            <polygon points="204.039 395.654 250.068 493.714 73.005 475.781 109.966 381.645 204.039 395.654" fill={colours.skin}/>
            <path d="M608.71111,708.10068a257.90911,257.90911,0,0,1-95.64,12.81l-14.09-22.85s-.59,8.51-1.47,21.52a248.82112,248.82112,0,0,1-45.47-9.64c-28.11-8.79-54.46-22.41-81.17-34.97-5.41-32.25-7.44-81.98,22.47-110.93l160.99,29.5s25.83,19.32,18.92,26.24c-6.91,6.91-7.98,5.84-3.44,10.38,4.54,4.54,14.35,10.61005,14.45,14.58C584.30107,646.29069,595.31108,674.40067,608.71111,708.10068Z" transform="translate(-312.27246 -115.84068)" fill={colours.darkest}/>
            <path d="M488.19882,322.00724l-38.89471,2.71358L424.165,349.013l-8.80424,1.57147A32.8246,32.8246,0,0,0,388.35461,384.83c1.811,30.68255,5.86582,76.52768,14.34076,91.40151,13.14119,23.06327,23.99553,15.827,13.14119,23.06327s-18.14163,1.55016-13.14119,12.98621-6.75842,26.10467-6.75842,26.10467l-4.681,4.681,4.96475,2.03476L554.41713,565.686s-13.67875-61.50178-5.1242-76.60989,29.296-60.77675,10.78455-78.6462l-18.0999-63.69413-31.13375-9.18242Z" transform="translate(-312.27246 -115.84068)" fill={colours.contrast}/>
            <path d="M723.64653,574.42937A17.98107,17.98107,0,0,1,706.56632,553.024L632.35987,502.7684l8.85421-23.94307L728.91379,539.159a17.95587,17.95587,0,0,1-5.26726,35.27033Z" transform="translate(-312.27246 -115.84068)" fill={colours.skin}/>
            <path d="M514.04974,343.72762l-10.783,4.26967,57.52156,112.34356,119.07923,81.16849,17.16487-29.01121-90.64431-78.2945-36.28982-69.59841A44.66534,44.66534,0,0,0,514.04974,343.72762Z" transform="translate(-312.27246 -115.84068)" fill={colours.contrast}/>
            <circle cx="154.45508" cy="157.23055" r="39.05578" fill={colours.skin}/>
            <path d="M500.69035,256.55559c-.65123.34367-1.29347.66029-1.94476.97685-.67839.32562-1.35679.65129-2.04418.9588-13.07045,5.92465-23.71676,6.585-30.17511-1.93565a36.16881,36.16881,0,0,0-2.97587-13.00712,20.90284,20.90284,0,0,1-3.44625,13.00712H447.09706c-13.39606,8.89147-20.27046,17.05939-10.97193,46.24848.606,1.91765,4.75782,70.04666,5.94275,75.28391-20.2795-7.779-37.7731-90.37144-38.21631-112.13438-.02717-.35273-.02717-.72361-.02717-1.08545a47.554,47.554,0,0,1,.27141-5.21909,48.86121,48.86121,0,0,1,1.23014-7.01914l-.05427-.00906a18.33085,18.33085,0,0,1-5.52665-15.48552,44.66352,44.66352,0,0,1,12.4101-11.12568,79.196,79.196,0,0,1,13.586-5.10155c.11759-.02711.21708-.05427.33467-.08138,1.42917-.389,2.8945-.74172,4.35983-1.04928a81.869,81.869,0,0,1,9.14477-1.3839c.22613-.00906.44321-.02717.64223-.02717a6.85291,6.85291,0,0,1,3.49147.9588c.00905,0,.00905.00906.02711.00906a6.89007,6.89007,0,0,1,3.35582,5.86132h14.49056c.53364,0,1.06733.01811,1.601.04522,20.18.805,36.39826,9.43427,37.43844,29.27057C500.67224,255.1988,500.69035,255.86814,500.69035,256.55559Z" transform="translate(-312.27246 -115.84068)" fill={colours.darkest}/>
            <circle cx="102.74716" cy="116.55484" r="25.73018" fill={colours.darkest}/>
            <path d="M450.34438,220.49454c-2.92316,13.90648-17.34512,22.22375-31.14221,18.82147a25.73019,25.73019,0,0,1-18.82147-31.1422c3.40228-13.79709,20.14678-9.81952,31.1422-18.82148C447.07749,176.61776,454.28651,201.74053,450.34438,220.49454Z" transform="translate(-312.27246 -115.84068)" fill={colours.darkest}/>
            <path d="M393.17569,607.597c21.92937-89.42732,65.38029-166.29182,137.3408-226.51415a20.24579,20.24579,0,0,1,27.77727-6.80757L729.36225,477.99792a20.24555,20.24555,0,0,1,6.80745,27.77714c-27.4664,91.76223-68.60463,171.3878-137.34068,226.51427a20.24537,20.24537,0,0,1-27.777,6.80761L399.98354,635.37428A20.24591,20.24591,0,0,1,393.17569,607.597Z" transform="translate(-312.27246 -115.84068)" fill={colours.light}/>
            <path d="M423.58155,637.73515a20.24547,20.24547,0,0,1-6.8076-27.777c21.92927-89.42776,65.38032-166.2921,137.34054-226.51446a19.98448,19.98448,0,0,1,7.54552-7.12751l-3.36622-2.04122a20.24619,20.24619,0,0,0-27.77725,6.80728C458.55617,441.30474,415.10528,518.169,393.176,607.59672a20.24539,20.24539,0,0,0,6.80759,27.777L571.05177,739.09662a20.1556,20.1556,0,0,0,20.23173.32023Z" transform="translate(-312.27246 -115.84068)" opacity="0.2" />
            <path d="M624.201,587.772l-114.829-69.18876a8.04378,8.04378,0,0,1,8.30255-13.77958l114.829,69.18876a8.04378,8.04378,0,0,1-8.30268,13.77942Z" transform="translate(-312.27246 -115.84068)" fill={colours.lightest}/>
            <path d="M557.40068,496.02091l-25.26225-15.2215a8.04383,8.04383,0,0,1,8.2592-13.80574l.04348.02632,25.26225,15.22151a8.04377,8.04377,0,0,1-8.30268,13.77941Z" transform="translate(-312.27246 -115.84068)" fill={colours.lightest}/>
            <path d="M605.95064,618.06109l-114.829-69.18876a8.04382,8.04382,0,0,1,8.28623-13.7895l.01632.00992,114.829,69.18876a8.04378,8.04378,0,0,1-8.30268,13.77942Z" transform="translate(-312.27246 -115.84068)" fill={colours.lightest}/>
            <circle cx="326.51102" cy="307.93473" r="33.53921" fill={colours.dark}/>
            <circle cx="268.69818" cy="595.63336" r="71.68503" fill={colours.lightest}/>
            <path d="M580.97062,784.15932a72.68506,72.68506,0,1,1,72.68506-72.68555A72.76757,72.76757,0,0,1,580.97062,784.15932Zm0-143.37012a70.68506,70.68506,0,1,0,70.68506,70.68457A70.76475,70.76475,0,0,0,580.97062,640.7892Z" transform="translate(-312.27246 -115.84068)" fill={colours.dark}/>
            <path d="M571.19132,748.78276a7.97166,7.97166,0,0,1-6.37854-3.19024L545.256,719.51639a7.97379,7.97379,0,1,1,12.75837-9.56813l12.7947,17.05832,32.86156-49.29169a7.97412,7.97412,0,1,1,13.26974,8.8465L577.82683,745.2317a7.97733,7.97733,0,0,1-6.41357,3.54846C571.33928,748.78146,571.2653,748.78276,571.19132,748.78276Z" transform="translate(-312.27246 -115.84068)" fill={colours.contrast}/>
            <ellipse cx="812.17178" cy="344.61891" rx="5.17661" ry="3.60114" transform="translate(-338.67921 -45.39552) rotate(-4.88719)" fill={colours.lightest}/>
            <ellipse cx="844.22218" cy="333.74642" rx="5.17661" ry="3.60114" transform="translate(-337.63641 -42.70455) rotate(-4.88719)" fill={colours.dark}/>
            <ellipse cx="796.9793" cy="320.16645" rx="5.17661" ry="3.60114" transform="translate(-336.65124 -46.77873) rotate(-4.88719)" fill={colours.secondarycontrast}/>
            <ellipse cx="783.12096" cy="312.68407" rx="2.27591" ry="3.27161" transform="translate(-361.92998 64.44338) rotate(-12.7322)" fill={colours.lightmid}/>
            <ellipse cx="773.54902" cy="293.55567" rx="2.27591" ry="3.27161" transform="translate(-357.94956 61.86343) rotate(-12.7322)" fill={colours.dark}/>
            <ellipse cx="819.47303" cy="320.41852" rx="2.27591" ry="3.27161" transform="translate(-362.74075 72.64536) rotate(-12.7322)" fill={colours.lightmid}/>
            <ellipse cx="805.47423" cy="332.03974" rx="2.27591" ry="3.27161" transform="translate(-365.64622 69.84586) rotate(-12.7322)" fill={colours.secondarycontrast}/>
            <ellipse cx="830.95919" cy="341.50532" rx="2.27591" ry="3.27161" transform="translate(-367.10572 75.69535) rotate(-12.7322)" fill={colours.dark}/>
            <ellipse cx="675.13485" cy="198.762" rx="3.60114" ry="5.17661" transform="translate(4.33932 688.54051) rotate(-75.77932)" fill={colours.lightest}/>
            <ellipse cx="641.29123" cy="198.54384" rx="3.60114" ry="5.17661" transform="translate(-20.9789 655.56939) rotate(-75.77932)" fill={colours.dark}/>
            <ellipse cx="681.48584" cy="226.84045" rx="3.60114" ry="5.17661" transform="translate(-18.0879 715.87766) rotate(-75.77932)" fill={colours.secondarycontrast}/>
            <ellipse cx="692.1313" cy="238.44708" rx="3.27161" ry="2.27591" transform="translate(66.02744 783.97815) rotate(-83.62433)" fill={colours.lightmid}/>
            <ellipse cx="694.91422" cy="259.65492" rx="3.27161" ry="2.27591" transform="translate(47.42466 805.59664) rotate(-83.62433)" fill={colours.dark}/>
            <ellipse cx="660.31394" cy="219.23899" rx="3.27161" ry="2.27591" transform="translate(56.83259 735.28249) rotate(-83.62433)" fill={colours.lightmid}/>
            <ellipse cx="677.34564" cy="212.84054" rx="3.27161" ry="2.27591" transform="translate(78.33185 746.52093) rotate(-83.62433)" fill={colours.secondarycontrast}/>
            <ellipse cx="656.36333" cy="195.55403" rx="3.27161" ry="2.27591" transform="translate(76.85916 710.30149) rotate(-83.62433)" fill={colours.dark}/>
            <path d="M314.27246,378.08775h-2V115.84068H466.72754v2h-.00015A152.45493,152.45493,0,0,0,314.27246,270.29561Z" transform="translate(-312.27246 -115.84068)" fill={colours.light}/>
            <path d="M403.84245,608.54427a19.07237,19.07237,0,0,1-9.03526-27.6058l-55.10537-77.46088L357.38,482.96777l64.77681,92.48a19.04564,19.04564,0,0,1-18.31433,33.0965Z" transform="translate(-312.27246 -115.84068)" fill={colours.skin}/>
            <path d="M405.10862,363.0727h0a13.59981,13.59981,0,0,0-17.38172,3.06013L313.27234,470.26162l69,98,27-29-42-66,55.81831-53.1454A44.66534,44.66534,0,0,0,405.10862,363.0727Z" transform="translate(-312.27246 -115.84068)" fill={colours.contrast}/>
        </svg>
    )
};