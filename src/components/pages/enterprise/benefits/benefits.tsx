import collaborationIcon from '@/svgs/pages/enterprise/collaboration.inline.svg';
import easyUseIcon from '@/svgs/pages/enterprise/easy-use-icon.inline.svg';
import flexIcon from '@/svgs/pages/enterprise/flexibility.inline.svg';
import speedIcon from '@/svgs/pages/enterprise/speed.inline.svg';

const CARDS = [
  {
    icon: easyUseIcon,
    title: 'Ease of use',
    description:
      'Offers a no-code, drag-and-drop interface for building GUIs, making it accessible to users without any programming background.',
  },
  {
    icon: collaborationIcon,
    title: 'Collaboration',
    description:
      'Everyone in the organization can access, visualize, and interact with operational data in real-time to make insightful business decisions.',
  },
  {
    icon: flexIcon,
    title: ' Flexibility',
    description:
      'As business changes, the need for flexibility to assess the impact, provide visibility and insight becomes ever more important.',
  },
  {
    icon: speedIcon,
    title: 'Faster time to value',
    description:
      'Accelerates the development process from conception to deployment, enhancing productivity and ensuring rapid delivery of data-driven applications.',
  },
];

function Benefits() {
  return (
    <section className="benefits mt-[223px] px-safe lg:mt-[184px]">
      <div className="container flex max-w-[1280px] gap-x-16 lg:max-w-[1024px] lg:gap-x-8">
        <div className="max-w-[384px] shrink-0 grow lg:max-w-[352px]">
          <h2 className="text-48 font-medium leading-dense tracking-tight lg:text-40 lg:font-semibold">
            Taipy Designer added value
          </h2>
          <p className="mt-6 text-18 text-grey-70 lg:mt-5 lg:text-16 lg:font-light">
            Taipy Designer gives you ease of use, flexibility, collaboration, and faster time to
            value, which is an ever-increasing need for today&#39;s Data/AI and Decision Support
            applications.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-[48px] lg:gap-y-9">
          {CARDS.map(({ icon: Icon, title, description }, index) => (
            <div key={index}>
              <div className="flex items-center gap-x-3 lg:gap-x-2.5">
                <Icon className="h-6 w-6 shrink-0 lg:h-5 lg:w-5" />
                <h3 className="text-24 font-medium lg:text-20 lg:leading-snug">{title}</h3>
              </div>
              <p className="mt-2 text-18 font-light text-grey-70 lg:mt-3 lg:text-14 sm:mt-1">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
