import DefaultLayout from '@/layouts/default';
import CoverLetter from '@/components/cover-letter';
import EventVenue from '@/components/event-venue';
import UbicationAndMore from '@/components/ubication-and-more';
import ContactConfirmation from '@/components/contact-confirmation';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block mb-5 max-w-lg text-center justify-center">
          <span className="font-imperial text-8xl">¡Le invitamos!</span>
        </div>
        <CoverLetter />
        <EventVenue />
        <UbicationAndMore />
        <ContactConfirmation />
      </section>
    </DefaultLayout>
  );
}
