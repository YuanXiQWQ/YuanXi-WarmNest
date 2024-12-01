public class Adapter implements Translator {
    private final Speaker speaker;

    public Adapter(final Speaker speaker)
    {
        this.speaker = speaker;
    }

    @Override
    public String translate()
    {
        String result = speaker.speak();
        return result + "\nTranslated: Hello World!";
    }
}
