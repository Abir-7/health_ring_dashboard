import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ArticleModalProps {
  title: string;
  desc?: string;
  image?: string;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ title, desc, image }) => {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger className="relative block w-full h-40 rounded-lg overflow-hidden hover:cursor-pointer">
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-3xl lg:max-w-5xl  overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mb-4">{title}</DialogTitle>

          <DialogDescription asChild>
            <div className="space-y-6">
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg w-full h-60 object-cover"
                />
              )}
              {desc && <div className="text-base text-black">{desc}</div>}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
