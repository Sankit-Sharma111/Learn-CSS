import { useRef, useState } from "react";
import { Download, ArrowLeft } from "lucide-react";
import domtoimage from "dom-to-image";
import { jsPDF } from "jspdf";
import { useAppContext } from "../../AppContext";

export function CertificateView({ onBack }: { onBack: () => void }) {
  const { certificateData, profileImage, userName } = useAppContext();
  const certRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!certificateData) return null;

  const handleDownload = async () => {
    if (!certRef.current) return;
    setIsDownloading(true);
    try {
      const node = certRef.current;
      const scale = 2;
      const width = node.offsetWidth * scale;
      const height = node.offsetHeight * scale;
      
      const imgData = await domtoimage.toPng(node, {
        width: width,
        height: height,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${node.offsetWidth}px`,
          height: `${node.offsetHeight}px`
        },
        cacheBust: true,
      });
      
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (height * pdfWidth) / width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certificate_${certificateData.name.replace(/\s+/g, "_")}.pdf`);
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF. Try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const certificateId = `SA-${certificateData.date.replace(/\D/g, '')}-${Math.floor(Math.random()*10000).toString().padStart(4, '0')}`;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 max-w-5xl mx-auto flex flex-col">
      <div className="bg-white border-b border-slate-100 px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-700" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Your Certificate</h1>
        </div>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 text-sm font-bold flex items-center gap-2 disabled:opacity-50 transition-colors"
        >
          <Download size={16} />
          {isDownloading ? "Generating High Quality PDF..." : "Save PDF"}
        </button>
      </div>

      <div className="p-4 flex-1 overflow-x-auto bg-slate-200 flex items-start justify-center pt-8">
        {/* Certificate Rendering Box - A4 Landscape (1122 x 793) */}
        <div 
          ref={certRef} 
          className="relative shrink-0 overflow-hidden"
          style={{ 
            width: '1122px', 
            height: '793px', 
            backgroundColor: '#faf9f6', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
          }}
        >
          {/* Paper Texture Overlay (CSS) */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

          {/* Outer Navy Border */}
          <div className="absolute inset-0 m-6 border-[12px]" style={{ borderColor: '#0f172a' }}></div>
          {/* Inner Gold Border */}
          <div className="absolute inset-0 m-10 border-4" style={{ borderColor: '#d4af37' }}></div>
          
          <div className="absolute inset-0 m-12 flex flex-col pt-12 px-16 z-10">
             
             {/* Header section: Logo, ID */}
             <div className="flex justify-between items-start w-full">
               <div className="text-left flex flex-col">
                  <div className="font-serif font-bold text-3xl tracking-wide" style={{ color: '#0f172a' }}>SANKIT</div>
                  <div className="font-sans font-bold text-sm tracking-[0.3em] mt-1" style={{ color: '#d4af37' }}>ACADEMY</div>
               </div>
               <div className="text-right flex flex-col">
                  <div className="font-mono text-xs font-bold tracking-widest text-slate-400 mb-1">CERTIFICATE ID</div>
                  <div className="font-mono font-bold text-slate-800 text-lg">{certificateId}</div>
               </div>
             </div>

             {/* Title Section */}
             <div className="text-center mt-4">
               <h1 className="font-serif font-bold uppercase tracking-widest" style={{ fontSize: '4rem', color: '#0f172a', letterSpacing: '0.25em' }}>
                 Certificate
               </h1>
               <h2 className="font-serif uppercase tracking-widest mt-2" style={{ fontSize: '1.5rem', color: '#d4af37', letterSpacing: '0.3em' }}>
                 Of Excellence
               </h2>
             </div>

             {/* Body Section */}
             <div className="flex items-center justify-between mt-12 w-full pl-4">
                <div className="flex-1 text-center pr-12">
                   <p className="italic text-2xl text-slate-600 mb-8 font-serif">This is proudly presented to</p>
                   <h3 className="font-serif font-bold italic border-b-2 px-12 pb-3 inline-block" style={{ fontSize: '3.5rem', color: '#0f172a', borderColor: '#d4af37' }}>
                     {certificateData.name}
                   </h3>
                   
                   <p className="mt-10 text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-serif">
                     For successfully completing the comprehensive <strong style={{color: '#0f172a'}}>CSS Learning Track</strong>, demonstrating exceptional proficiency in Web Design, Box Model, Flexbox, Layouts, and modern Cascading Style Sheets techniques.
                   </p>
                   <p className="mt-8 text-sm font-bold tracking-widest text-slate-400 uppercase">
                      Father's Name: {certificateData.fatherName} &nbsp;|&nbsp; D.O.B: {certificateData.dob} &nbsp;|&nbsp; Location: {certificateData.state}
                   </p>
                </div>
                
                {/* Photo Placeholder */}
                <div className="shrink-0 relative flex flex-col items-center mr-8">
                   <div className="w-48 h-48 rounded-full border-[6px] overflow-hidden flex items-center justify-center bg-[#f1f5f9] shadow-lg relative" style={{ borderColor: '#d4af37' }}>
                      {profileImage ? (
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-6xl font-bold text-slate-400">
                          {userName.charAt(0).toUpperCase()}
                        </div>
                      )}
                   </div>
                   <div className="mt-3 text-xs font-bold tracking-widest text-slate-400">STUDENT PROFILE</div>
                </div>
             </div>

             {/* Bottom Section */}
             <div className="absolute bottom-12 left-16 right-16 flex justify-end items-end">
               {/* Signatures */}
               <div className="flex gap-16">
                  <div className="text-center">
                    <div className="w-48 border-b-2 pb-2 mb-2 font-serif text-2xl font-bold pt-4" style={{ borderColor: '#0f172a', color: '#0f172a' }}>
                       {certificateData.date}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Date Completed</div>
                  </div>

                  <div className="text-center">
                    <div className="w-48 border-b-2 pb-2 mb-2 pt-2 text-3xl" style={{ borderColor: '#0f172a', fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive', color: '#0f172a' }}>
                      Sankit
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Course Director</div>
                  </div>
               </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
}
